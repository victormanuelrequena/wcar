import { FC, useContext, useEffect, useState } from "react";
import "./BlogPageStyles.scss";
import BlogPostEntity from "../../../../../domain/entities/BlogPostEntity";
import di from "../../../../../di/DependencyInjection";
import GetAllBlogsAndMainPostUseCase, {
    GetAllBlogsAndMainPostUseCaseName,
} from "../../../../../domain/use_cases/blog/GetAllBlogsAndMainPostUseCase";
import ModalsContext from "../../../../../domain/providers/modal/ModalsContext";
import ModalsContextType from "../../../../../domain/providers/modal/ModalsContextType";
import Layout from "../../../layout/Layout";
import Icons from "../../../assets/Icons";
import DateParse from "../../../../utils/DateParse";
import CardBlogComponent from "./components/CardBlogComponent";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/RoutesComponent";
import HostApi from "../../../../../data/settings/HostApi";
import BlogPostImplDto from "../../../../../data/dto/impl/BlogPostImplDto";

const BlogPage: FC<{}> = () => {
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const [blogs, setBlogs] = useState([]);
    const [outstandingBlog, setOutstandingBlog] = useState(undefined);

    const _loadBlogs = async () => {
        try {
            const response = await HostApi.get("/post");
            console.log("🚀 ~ file: BlogPage.tsx:27 ~ const_loadBlogs= ~ response:", response);
            // const blogsData = await response.blogs.map((blog: any) => BlogPostImplDto.fromJson(blog));
            const blogsData = await response.blogs;
            const mainPostData = await response.main_post;
            console.log("🚀 ~ file: BlogPage.tsx:30 ~ const_loadBlogs= ~ blogsData:", blogsData);
            const activeBlogs = blogsData.filter((blog: any) => blog.active === true);
            setBlogs(activeBlogs);
            setOutstandingBlog(mainPostData);
        } catch (error) {
            console.log(error);
            addToast("Error al obtener los posts", "error", undefined);
        }
    };

    useEffect(() => {
        _loadBlogs();
    }, []);

    return (
        <div className="blog_page">
            <Layout>
                {outstandingBlog && (
                    <section className="section_1">
                        <img
                            src={outstandingBlog?.photoUrl}
                            alt="Wcar"
                            title="Wcar"
                            className="img-fluid object_cover w-100 outstandingBlog-main-image"
                        />
                        <div className="container">
                            <div className="outstanding_blog ms-md-5">
                                <div className="row">
                                    <Link
                                        to={
                                            routes.detailedBlog.relativePath +
                                            `/${
                                                outstandingBlog.url_post
                                                    ? outstandingBlog.url_post.replace(/ /g, "-")
                                                    : outstandingBlog.title.replace(/ /g, "-")
                                            }?id=${outstandingBlog.id}`
                                        }
                                        className="col-md-6 ms-md-5"
                                    >
                                        <div className="bg_white outstanding_container p-4">
                                            <div className="tag">{outstandingBlog?.tagName}</div>
                                            <h1 className="my-2 text_bold outstanding-title">
                                                {outstandingBlog?.title}
                                            </h1>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 blog_info_user">
                                                    {/* <img
                                                        src={
                                                            outstandingBlog?.user?.photo ||
                                                            "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=1944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        }
                                                        alt="Wcar"
                                                        title="Wcar"
                                                        style={{ width: "36px", height: "36px", objectFit: "cover" }}
                                                        className="img_rounded me-2"
                                                    />
                                                    <span className="text_gray text_bold" style={{ fontSize: "14px" }}>
                                                        {outstandingBlog?.user?.name || ""}
                                                    </span> */}
                                                    <span className="text_gray date">
                                                        {new Intl.DateTimeFormat("es-ES", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        }).format(new Date(outstandingBlog.created_at))}
                                                    </span>
                                                </div>
                                                <div className="text_orange">
                                                    <Icons.ArrowCircle width={60} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                <section className="section_2 pb-5 mt-3">
                    <div className="container">
                        <h5 className="text_bold last-articles-title">Últimos artículos</h5>
                        <div className="row">
                            {blogs.map((blog, index) => (
                                <div className="col-md-4 col-lg-3 my-3" key={index}>
                                    <CardBlogComponent blog={blog} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default BlogPage;
