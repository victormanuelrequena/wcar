import di from "../../../../di/DependencyInjection";
import CommentEntity from "../../../../domain/entities/CommentEntity";
import GetAllCommentsUseCase, {
    GetAllCommentsUseCaseName,
} from "../../../../domain/use_cases/comment/GetAllCommentsUseCase";
import DateParse from "../../../utils/DateParse";
import Icons from "../../assets/Icons";
import SliderComponent from "../slider/SliderComponent";
import StarRatingComponent from "../starRating/StarRatingComponent";
import "./CommentsLineComponentStyles.scss";
import { FC, useEffect, useState } from "react";

const CommenstLineComponent: FC<{}> = () => {
    const [comments, setComments] = useState<CommentEntity[]>([]);

    const _getComments = async () => {
        try {
            const response = await di.get<GetAllCommentsUseCase>(GetAllCommentsUseCaseName).call();
            setComments(response);
        } catch (e) {
            setComments([]);
        }
    };

    useEffect(() => {
        _getComments();
    }, []);

    if (comments.length <= 0) return null;

    return (
        <section className="comments_line_component">
            <img
                src="assets/recs/lines_box_large.png"
                className="position-absolute start-0 allies_say_lines_img h-100"
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-3 d-md-flex justify-content-start justify-content-md-end align-items-center black_side">
                        <div className="side side_top side_md_blue_neon text_black text_md_white mt-5 ms-3 mt-md-0 pe-5">
                            <h2>
                                <b>¿Qué </b>
                                <span className="text_bold text_md_lighter">
                                    <br className="d-none d-md-block" /> dicen de
                                </span>
                                <br />
                                <span className="text_lighter text_wcar"> wcar?</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-9 pt-md-5 px-3 px-md-1 pb-4">
                        <SliderComponent
                            responsive={{
                                mobile: {
                                    breakpoint: { max: 769, min: 0 },
                                    items: 1,
                                    slidesToSlide: 1, // optional, default to 1.
                                },
                                tablet: {
                                    breakpoint: { max: 1024, min: 769 },
                                    items: 2,
                                    slidesToSlide: 2, // optional, default to 1.
                                },
                                desktop: {
                                    breakpoint: { max: 1280, min: 1024 },
                                    items: 2,
                                    slidesToSlide: 2, // optional, default to 1.
                                },
                                largeDesktop: {
                                    breakpoint: { max: 3000, min: 1280 },
                                    items: 3,
                                    slidesToSlide: 3, // optional, default to 1.
                                },
                            }}
                        >
                            {comments.map((comment, index) => (
                                <div className="comment px-3 mb-4" key={index}>
                                    <div className="card border-0">
                                        <div className="card-body">
                                            <div className="d-flex mb-3">
                                                <div>
                                                    <img
                                                        src={comment.photoUrl}
                                                        alt="wcar"
                                                        title="wcar"
                                                        className=" img_rounded"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 d-flex flex-column px-2">
                                                    <strong>{comment.name}</strong>
                                                    <div className="d-flex align-items-star">
                                                        <div className="me-1">
                                                            <strong>{comment.calification}.0</strong>
                                                        </div>
                                                        <StarRatingComponent rating={comment.calification} />
                                                    </div>
                                                </div>
                                                <Icons.Quote />
                                            </div>
                                            <p>
                                                {comment.content.length > 300
                                                    ? `${comment.content.substring(0, 300)}...`
                                                    : comment.content}
                                            </p>
                                            <p className="text_gray">{DateParse.dateToMonthDayYear(comment.date)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </SliderComponent>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommenstLineComponent;
