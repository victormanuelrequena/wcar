import { FC, useContext, useEffect, useState } from 'react'
import './BlogPageStyles.scss'
import BlogPostEntity from '../../../../../domain/entities/BlogPostEntity'
import di from '../../../../../di/DependencyInjection';
import GetAllBlogsAndMainPostUseCase, { GetAllBlogsAndMainPostUseCaseName } from '../../../../../domain/use_cases/blog/GetAllBlogsAndMainPostUseCase';
import ModalsContext from '../../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../../domain/providers/modal/ModalsContextType';
import Layout from '../../../layout/Layout';
import Icons from '../../../assets/Icons';
import DateParse from '../../../../utils/DateParse';
import CardBlogComponent from './components/CardBlogComponent';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/RoutesComponent';

const BlogPage: FC<{}> = () => {
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const [blogs, setBlogs] = useState<BlogPostEntity[]>([]);
    const [outstandingBlog, setOutstandingBlog] = useState<BlogPostEntity | undefined>(undefined);

    const _loadBlogs = async () => {
        try {
            const response = await di.get<GetAllBlogsAndMainPostUseCase>(GetAllBlogsAndMainPostUseCaseName).call();
            setBlogs(response.blogs);
            setOutstandingBlog(response.mainPost);
        } catch (error) {
            addToast('Error al obtener los posts', 'error', undefined,);
        }
    }

    useEffect(() => {
        _loadBlogs();
    }, []);

    return <div className="blog_page">
        <Layout>
            {outstandingBlog && <section className="section_1 mt-5">
                <div className="container">
                    <img src={outstandingBlog.photoUrl} alt="" className="img-fluid objet_cover w-100" />
                    <div className="outstanding_blog ms-md-5">
                        <div className="row">
                            <Link to={routes.detailedBlog.relativePath + '/' + outstandingBlog.id} className="col-md-6 ms-md-5">
                                <div className="bg_white outstanding_container p-4">
                                    <div className="tag">{outstandingBlog?.tagName}</div>
                                    <h1 className="my-2 text_bold">{outstandingBlog.title}</h1>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 blog_info_user">
                                            <img src={outstandingBlog.user.photo} alt="" className="img_rounded me-2" />
                                            <span className="text_gray text_bold">{outstandingBlog.user.name}</span>
                                            <span className="text_gray date">{DateParse.dateToMonthDayYear(outstandingBlog.createdAt)}</span>
                                        </div>
                                        <div className='text_orange'>
                                            <Icons.ArrowCircle width={60}/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>}
            <section className="section_2 py-5">
                <div className="container">
                    <h5 className="text_bold">Últimos artículos</h5>
                    <div className="row">
                        {blogs.map((blog, index) => <div className="col-md-4 col-lg-3 my-3" key={index}>
                            <CardBlogComponent blog={blog} />
                        </div>)}
                    </div>
                </div>
            </section>
        </Layout>
    </div>
}

export default BlogPage;