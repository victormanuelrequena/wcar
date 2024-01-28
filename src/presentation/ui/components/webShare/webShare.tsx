import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaRegClipboard } from "react-icons/fa";
import "./webShareStyles.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WebShare = () => {
    const [isShare, setIsShare] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const url = window.location.href;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
            setIsShare(false);
        };

        window.addEventListener("resize", handleResize);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            toast.success("Link copiado", {
                position: "top-right",
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                autoClose: 3000,
                toastId: "toast",
            });
        } catch (error) {
            console.error(error);
            toast.error("Error al copiar el link", {
                position: "top-right",
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                autoClose: 3000,
                toastId: "toast",
            });
        }
    };

    const openShareMenu = () => {
        setIsShare(!isShare);
    };

    const selectShareMedium = (socialMedia: string) => {
        const facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        const twitter = `https://twitter.com/intent/tweet?url=${url}`;
        const whatsapp = `https://api.whatsapp.com/send?text=${url}`;
        const email = `mailto:?body=${url}`;

        switch (socialMedia) {
            case "facebook":
                window.open(facebook, "facebook-popup", "height=350,width=600")?.focus();
                break;
            case "twitter":
                window.open(twitter, "twitter-popup", "height=350,width=600")?.focus();
                break;
            case "whatsapp":
                window.open(whatsapp, "whatsapp-popup", "height=350,width=600")?.focus();
                break;
            case "email":
                window.open(email);
                break;
            case "copy":
                copy();
                break;
            default:
                break;
        }
    };

    const webShareApi = (obj) => {
        if (navigator.share) {
            navigator
                .share(obj)
                .then(() => console.log("share"))
                .catch((e) => console.error(e));
        } else {
            setIsShare(!isShare);
        }
    };

    return (
        <div className="position-relative" style={{ height: "35px" }}>
            <div
                className="icon_close position-absolute d-flex justify-content-center align-items-center"
                style={{ border: isShare ? "1px solid gray" : "0", zIndex: 110 }}
                onClick={isMobile ? () => webShareApi({ url: window.location.href }) : openShareMenu}
            >
                {/* {isShare ? <IoMdClose className="icon" /> : <HiOutlinePaperAirplane className="icon" />} */}
                {isShare ? (
                    <IoMdClose className="icon" />
                ) : (
                    <img src="/assets/icons/share.png" alt="" className="icon" />
                )}
            </div>
            {isShare && (
                <div
                    className="share d-flex justify-content-evenly align-items-center pl-3 position-absolute icon_container ms-2 rounded-4 ps-3 bg-light"
                    style={{
                        justifyContent: isShare ? "space-around" : "start",
                        zIndex: 100,
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <>
                        <div className="icon_container" onClick={() => selectShareMedium("facebook")}>
                            <FaFacebookF className="icon facebook" />
                        </div>
                        <div className="icon_container" onClick={() => selectShareMedium("twitter")}>
                            <FaTwitter className="icon twitter" />
                        </div>

                        <div className="icon_container whatsapp" onClick={() => selectShareMedium("whatsapp")}>
                            <IoLogoWhatsapp className="icon whatsapp" />
                        </div>
                        <div className="icon_container" onClick={() => selectShareMedium("email")}>
                            <img src="/assets/icons/mail.svg" className="img-fluid" alt="wcar" title="wcar" />
                        </div>
                        <div className="icon_container" onClick={() => selectShareMedium("copy")}>
                            <img src="/assets/icons/link.svg" className="img-fluid" alt="wcar" title="wcar" />
                        </div>
                    </>
                </div>
            )}
        </div>
    );
};
