import "./termAndConditionsStyles.scss";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";

const TermAndConditions = () => {
    const { id } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch(`https://api.wcaronline.com/api/terms/${id}/`)
            .then((res) => res.json())
            .then((res) => setContent(res.term));
    }, []);

    return (
        <>
            {content !== null && (
                <div className="term_and_conditions">
                    <div>
                        <Helmet>
                            <title>{content.title}</title>
                        </Helmet>
                        <Layout>
                            <div
                                className="w-100 px-3 p_spaced"
                                style={{
                                    backgroundImage: "url(/assets/pages/contact/bg_contact.jpg)",
                                    backgroundSize: "contain",
                                }}
                            >
                                <div className="container">
                                    <div className="py-4 px-5 bg-white">
                                        <div className="mb-3">
                                            <h1 className="my-2 text_bold">{content.title}</h1>
                                        </div>
                                        {content.contents_terms.map((data: any, i: number) => {
                                            return (
                                                <section className="section_content" key={i}>
                                                    {data.subTitle && (
                                                        <div className="side side_top mb-3">
                                                            <h3>{data.subTitle}</h3>
                                                        </div>
                                                    )}

                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: data.paragraph ?? "" }}
                                                    ></div>
                                                </section>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Layout>
                    </div>
                </div>
            )}
        </>
    );
};

export default TermAndConditions;
