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
                                    <h1 className="my-2 text_bold" style={{ fontSize: "36px" }}>
                                        {blogData?.post?.title}
                                    </h1>
                                    <div className="blog_info_user">
                                        <img
                                            src={
                                                blogData?.post?.user.photo ||
                                                "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=1944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            }
                                            alt="Wcar"
                                            title="Wcar"
                                            className="img_rounded me-2"
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                            }}
                                        />
                                        <span className="text_gray text_bold">{blogData?.post?.user.name}</span>
                                        <span className="text_gray date">
                                            {/* {DateParse.dateToMonthDayYear(blogData.createdAt)} */}
                                            {new Intl.DateTimeFormat("es-ES", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }).format(new Date(blogData?.post?.created_at))}
                                        </span>
                                    </div>
                                    <img
                                        src={blogData?.post?.photoUrl}
                                        alt="Wcar"
                                        title="Wcar"
                                        className="img-fluid w-100 object_cover img_card_blog my-4"
                                        style={{
                                            minHeight: "260px",
                                            maxHeight: "462px",
                                            objectFit: "cover",
                                            borderRadius: "12px",
                                        }}
                                    />
                                </section>
                                <section className="col-md-10 mt-5 section_2 section-content">
                                    {/* <div dangerouslySetInnerHTML={{ __html: blog.content ?? "" }}></div> */}
                                    <p>
                                        Traveling is an enriching experience that opens up new horizons, exposes us to
                                        different cultures, and creates memories that last a lifetime. However,
                                        traveling can also be stressful and overwhelming, especially if you don't plan
                                        and prepare adequately. In this blog article, we'll explore tips and tricks for
                                        a memorable journey and how to make the most of your travels.
                                        <br />
                                        <br />
                                        One of the most rewarding aspects of traveling is immersing yourself in the
                                        local culture and customs. This includes trying local cuisine, attending
                                        cultural events and festivals, and interacting with locals. Learning a few
                                        phrases in the local language can also go a long way in making connections and
                                        showing respect.
                                    </p>
                                    <div className="quote">
                                        <p>
                                            “ Traveling can expose you to new environments and potential health risks,
                                            so it's crucial to take precautions to stay safe and healthy. ”
                                        </p>
                                    </div>
                                    <img
                                        src={
                                            "https://images.unsplash.com/photo-1541410374363-986ee54b03f7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        }
                                        alt="Wcar"
                                        title="Wcar"
                                        className="img-fluid w-100 object_cover img_card_blog my-4"
                                        style={{
                                            minHeight: "260px",
                                            maxHeight: "462px",
                                            objectFit: "cover",
                                            borderRadius: "12px",
                                        }}
                                    />
                                    <h6>Pack Lightly and Smartly</h6>
                                    <p style={{ marginTop: "16px" }}>
                                        Packing can be a daunting task, but with some careful planning and smart
                                        choices, you can pack light and efficiently. Start by making a packing list and
                                        sticking to it, focusing on versatile and comfortable clothing that can be mixed
                                        and matched. Invest in quality luggage and packing organizers to maximize space
                                        and minimize wrinkles.
                                    </p>
                                    <h6>Stay Safe and Healthy</h6>
                                    <p style={{ marginTop: "16px" }}>
                                        Traveling can expose you to new environments and potential health risks, so it's
                                        crucial to take precautions to stay safe and healthy. This includes researching
                                        any required vaccinations or medications, staying hydrated, washing your hands
                                        frequently, and using sunscreen and insect repellent. It's also essential to
                                        keep your valuables safe and secure and to be aware of your surroundings at all
                                        times.
                                    </p>
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
