import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import "./webShareStyles.scss";

export const WebShare = () => {
    const [isShare, setIsShare] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener("resize", handleResize);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const openShareMenu = () => {
        setIsShare(!isShare);
    };

    const selectShareMedium = (socialMedia: string) => {
        const url = window.location.href;
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
        <div className="position-relative">
            <div
                className="icon_close position-absolute d-flex justify-content-center align-items-center"
                style={{ border: isShare ? "1px solid gray" : "0" }}
                onClick={isMobile ? () => webShareApi({ url: window.location.href }) : openShareMenu}
            >
                {isShare ? <IoMdClose className="icon" /> : <HiOutlinePaperAirplane className="icon" />}
            </div>
            <div
                className="share d-flex justify-content-evenly align-items-center pl-3"
                style={{ justifyContent: isShare ? "space-around" : "start" }}
            >
                {isShare && (
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
                            <MdOutlineMail className="icon email" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
