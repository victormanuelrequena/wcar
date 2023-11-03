import { useEffect, useState } from "react";
import BlogPostEntity from "../../../../../domain/entities/BlogPostEntity";
import Layout from "../../../layout/Layout";
import "./BlogDetailedPageStyles.scss";
import { useParams, useSearchParams } from "react-router-dom";
import NotResultsComponent from "../../../components/notResults/NotResultsComponent";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";
import DateParse from "../../../../utils/DateParse";
import GetBlogPostByIdUseCase, {
    GetBlogPostByIdUseCaseName,
} from "../../../../../domain/use_cases/blog/GetBlogPostByIdUseCase.tsx";
import di from "../../../../../di/DependencyInjection";
import HostApi from "../../../../../data/settings/HostApi";

const BlogDetailedPage = () => {
    const { id } = useParams<{ id: string }>();
    const [blogData, setBlogData] = useState(undefined);
    // const [blog, setBlog] = useState<BlogPostEntity | undefined | null>(undefined);
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("🚀 ~ file: BlogDetailedPage.tsx:20 ~ BlogDetailedPage ~ searchParams:", searchParams.get("id"));

    const _getBlog = async () => {
        try {
            // const response = await di.get<GetBlogPostByIdUseCase>(GetBlogPostByIdUseCaseName).call(id!);
            const response = await HostApi.get(`/post/${searchParams.get("id")}/`);
            console.log("🚀 ~ file: BlogDetailedPage.tsx:21 ~ const_getBlog= ~ response:", response);
            // setBlog(response);
            setBlogData(response);
        } catch (error) {
            // setBlog(null);
        }
    };

    useEffect(() => {
        _getBlog();
    }, [id]);

    return (
        <div className="blog_detailed_page">
            <Layout>
                {id === undefined ||
                    (blogData === null && (
                        <div className="py-5">
                            <NotResultsComponent />
                        </div>
                    ))}
                {blogData === undefined && (
                    <div className="py-5">
                        <LoadingComponent />
                    </div>
                )}
                {blogData !== null && blogData !== undefined && (
                    <div>
                        <div className="container outstanding_container p-4">
                            <div className="row d-flex justify-content-center">
                                <section className="col-md-10 section_1">
                                    <div className="tag">{blogData?.post?.tagName}</div>
                                    <h1 className="my-2 text_bold">{blogData?.post?.title}</h1>
                                    <div className="blog_info_user">
                                        <img
                                            src={
                                                blogData?.post?.user.photo ||
                                                "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=1944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            }
                                            alt="Wcar"
                                            title="Wcar"
                                            className="img_rounded me-2"
                                        />
                                        <span className="text_gray text_bold">{blogData?.post?.user.name}</span>
                                        <span className="text_gray date">
                                            {/* {DateParse.dateToMonthDayYear(blogData.createdAt)} */}
                                        </span>
                                    </div>
                                    <img
                                        src={blogData?.post?.photoUrl}
                                        alt="Wcar"
                                        title="Wcar"
                                        className="img-fluid w-100 object_cover img_card_blog my-4"
                                    />
                                </section>
                                <section className="col-md-10 mt-5 section_2">
                                    {/* <div dangerouslySetInnerHTML={{ __html: blog.content ?? "" }}></div> */}
                                </section>
                            </div>
                        </div>
                    </div>
                )}
            </Layout>
        </div>
    );
};

export default BlogDetailedPage;
