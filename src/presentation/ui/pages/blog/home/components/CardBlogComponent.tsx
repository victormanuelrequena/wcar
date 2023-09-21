import './CardBlogComponentStyles.scss';
import { FC } from "react";
import CardBlogComponentProps from "./CardBlogComponentProps";
import DateParse from '../../../../../utils/DateParse';
import { Link } from 'react-router-dom';
import { routes } from '../../../../routes/RoutesComponent';

const CardBlogComponent: FC<CardBlogComponentProps> = ({ blog }) => {
    return <Link to={routes.detailedBlog.relativePath + '/' + blog.id} className="card_blog_component">
        <div className="card">
            <div className="card_body p-3">
                <img src={blog.photoUrl} alt="Wcar" title="Wcar" className="img-fluid w-100 object_cover img_card_blog" />
                <div className="tag mt-3">{blog?.tagName}</div>
                <h5 className="my-3 text_bold">{blog.title}</h5>
                <div className="blog_info_user">
                    <img src={blog.user.photo} alt="Wcar" title="Wcar" className="img_rounded me-2" />
                    <span className="text_gray text_bold">{blog.user.name}</span>
                    <span className="text_gray date">{DateParse.dateToMonthDayYear(blog.createdAt)}</span>
                </div>
            </div>
        </div>
    </Link>
}

export default CardBlogComponent;