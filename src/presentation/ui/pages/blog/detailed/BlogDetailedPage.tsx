import { useEffect, useState } from 'react';
import BlogPostEntity from '../../../../../domain/entities/BlogPostEntity';
import Layout from '../../../layout/Layout';
import './BlogDetailedPageStyles.scss';
import { useParams } from 'react-router-dom';
import NotResultsComponent from '../../../components/notResults/NotResultsComponent';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import DateParse from '../../../../utils/DateParse';
import GetBlogPostByIdUseCase, { GetBlogPostByIdUseCaseName } from '../../../../../domain/use_cases/blog/GetBlogPostByIdUseCase.tsx';
import di from '../../../../../di/DependencyInjection';

const BlogDetailedPage = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<BlogPostEntity | undefined | null>(undefined);

    const _getBlog = async () => {
        try {
            const response = await di.get<GetBlogPostByIdUseCase>(GetBlogPostByIdUseCaseName).call(id!);
            setBlog(response);
        } catch (error) {
            setBlog(null);
        }
    }

    useEffect(() => {
        _getBlog();
    }, [id]);

    return <div className="blog_detailed_page">
        <Layout>
            {id === undefined || blog === null && <div className="py-5"><NotResultsComponent /></div>}
            {blog === undefined && <div className="py-5"><LoadingComponent /></div>}
            {blog !== null && blog !== undefined && <div>
                <div className="container outstanding_container p-4">
                    <div className="row d-flex justify-content-center">
                        <section className="col-md-10 section_1">
                            <div className="tag">{blog?.tagName}</div>
                            <h1 className="my-2 text_bold">{blog.title}</h1>
                            <div className="blog_info_user">
                                <img src={blog.user.photo} alt="" className="img_rounded me-2" />
                                <span className="text_gray text_bold">{blog.user.name}</span>
                                <span className="text_gray date">{DateParse.dateToMonthDayYear(blog.createdAt)}</span>
                            </div>
                            <img src={blog.photoUrl} alt="" className="img-fluid w-100 object_cover img_card_blog my-4" />
                        </section>
                        <section className="col-md-10 mt-5 section_2">
                            <div dangerouslySetInnerHTML={{ __html: blog.content ?? '' }} ></div>
                        </section>
                    </div>
                </div>

            </div>}
        </Layout>
    </div>
};

export default BlogDetailedPage;