import "./CardBlogComponentStyles.scss";
import { FC } from "react";
import CardBlogComponentProps from "./CardBlogComponentProps";
import DateParse from "../../../../../utils/DateParse";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes/RoutesComponent";

const CardBlogComponent: FC<CardBlogComponentProps> = ({ blog }) => {
    const month = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(new Date(blog.created_at));
    const day = new Intl.DateTimeFormat("es-ES", { day: "numeric" }).format(new Date(blog.created_at));
    const year = new Intl.DateTimeFormat("es-ES", { year: "numeric" }).format(new Date(blog.created_at));

    return (
        <Link to={routes.detailedBlog.relativePath + "/" + blog.id} className="card_blog_component">
            <div className="card">
                <div className="card_body p-3">
                    <img
                        src={blog.photoUrl}
                        alt="Wcar"
                        title="Wcar"
                        className="img-fluid w-100 object_cover img_card_blog"
                    />
                    <div className="tag mt-3">{blog?.tagName}</div>
                    <h5 className="my-3 text_bold">{blog.title}</h5>
                    <div className="blog_info_user">
                        <img
                            src={
                                blog?.user?.photo ||
                                "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=1944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            alt="Wcar"
                            title="Wcar"
                            className="img_rounded me-2"
                            style={{ width: "36px", height: "36px", objectFit: "cover" }}
                        />
                        <span style={{ fontSize: "14px", color: "#90A3BF", fontWeight: "700" }}>
                            {blog?.user?.name}
                        </span>
                        {/* <span className="text_gray date">{DateParse.dateToMonthDayYear(blog.createdAt)}</span> */}
                        <span className="text_gray date">{`${month} ${day}, ${year}`}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardBlogComponent;
