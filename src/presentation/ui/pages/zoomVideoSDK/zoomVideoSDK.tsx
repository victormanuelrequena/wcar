import "./zoomVideoSDKStyles.scss";
import ZoomVideo from "@zoom/videosdk";
import { useEffect, useState } from "react";
import { generateVideoToken } from "./generateToken";
import Speaker from "./icons/speaker";
import Mic from "./icons/mic";
import ThreeDots from "./icons/threeDots";
import Camera from "./icons/camera";
import ScreenRecord from "./icons/screenRecord";
import Exit from "./icons/exit";
import Hand from "./icons/hand";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";
import { toast } from "react-toastify";

export const ZoomVideoSDK = () => {
    const Navigate = useNavigate();
    let client = ZoomVideo.createClient();
    let stream: any;
    const [shareVideo, setShareVideo] = useState(false);
    const [initVideo, setInitVideo] = useState(false);
    const [initMic, setInitMic] = useState(false);
    const [initScreenRecord, setInitScreenRecord] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const userName = JSON.parse(localStorage.getItem("userName"));

        const token = generateVideoToken(
            "47A5MLkZR3azitNm6vkw1Q",
            "2H09wgkJkPP5Iy4WOwuvkLpComQVEWDvJnYp",
            "tester",
            "",
            "",
            "",
            0,
            "",
            "",
            ""
        );

        if (ZoomVideo.checkSystemRequirements().video && ZoomVideo.checkSystemRequirements().audio) {
            client.init("en-US", "Global", { patchJsMedia: true }).then(() => {
                client
                    .join("tester", token, userName.userName)
                    .then((res) => {
                        stream = client.getMediaStream();
                        stream.startAudio().then(() => {
                            setInitMic(true);
                        });
                    })
                    .catch((e) => console.error(e));
            });

            return () => {
                client.leave();
            };
        }
    }, []);

    // const endTheCall = () => {
    //     fetch(`https://api.wcaronline.com/api/video-assistances-rooms/${""}/update/`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify()
    //     });
    // };

    // Funciones para apagar y encender la camara \/

    const videoInit = () => {
        stream = client.getMediaStream();
        if (stream.isRenderSelfViewWithVideoElement()) {
            stream
                .startVideo({
                    hd: true,
                    videoElement: document.querySelector("#my-self-view-video"),
                })
                .then(() => {
                    setInitVideo(true);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const videoStop = () => {
        stream = client.getMediaStream();
        stream
            .stopVideo()
            .then(() => {
                setInitVideo(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const video = () => {
        if (client.getCurrentUserInfo().bVideoOn) {
            videoStop();
        } else {
            videoInit();
        }
    };

    // Funciones para apagar y encender la camara /\

    // Funciones para mutear y desmutear el audio \/

    const mute = () => {
        stream = client.getMediaStream();
        stream
            .muteAudio()
            .then(() => {
                setInitMic(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const unMute = () => {
        stream = client.getMediaStream();
        stream
            .unmuteAudio()
            .then(() => {
                setInitMic(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const audio = () => {
        if (client.getCurrentUserInfo().muted) {
            unMute();
        } else {
            mute();
        }
    };

    // Funciones para mutear y desmutear el audio /\

    // Funciones para compartir pantalla \/

    const shareScreen = () => {
        stream = client.getMediaStream();
        stream
            .startShareScreen(document.querySelector("#my-screen-share-content-video"))
            .then(() => {
                setInitScreenRecord(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const shareScreenStop = () => {
        stream = client.getMediaStream();
        stream
            .stopShareScreen()
            .then(() => {
                setInitScreenRecord(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const share = () => {
        let isAnyoneSharing = false;

        client.getAllUser().forEach((user) => {
            if (user.sharerOn) {
                isAnyoneSharing = true;
                if (user.userId === client.getCurrentUserInfo().userId) {
                    shareScreenStop();
                } else {
                    toast.warn(`${user.displayName} esta compartiendo su pantalla`, {
                        position: "top-right",
                        hideProgressBar: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                        autoClose: 3000,
                        toastId: "toast",
                    });
                }
            }
        });

        if (!isAnyoneSharing) {
            shareScreen();
        }
    };

    // Funciones para compartir pantalla /\

    // Funciones para salir de la llamada \/

    const exit = () => {
        client
            .leave()
            .then(() => {
                // endTheCall()
                Navigate(routes.home.relativePath);
            })
            .catch((error) => {
                console.log("Failed to leave the session", error);
            });
    };

    // Funciones para salir de la llamada /\

    // Evento para saber cuando un usuario enciende su camara
    client.on("peer-video-state-change", (payload) => {
        stream = client.getMediaStream();
        if (payload.action === "Start") {
            stream.renderVideo(document.querySelector("#participant-videos-canvas"), payload.userId, 672, 378, 0, 0, 3);
        } else if (payload.action === "Stop") {
            stream.stopRenderVideo(document.querySelector("#participant-videos-canvas"), payload.userId);
        }
    });

    // Evento para saber cuando un usuario comparte pantalla
    client.on("active-share-change", (payload) => {
        stream = client.getMediaStream();
        if (payload.state === "Active") {
            setShareVideo(true);

            client.getAllUser().forEach((user) => {
                if (user.sharerOn) {
                    stream.startShareView(
                        document.querySelector("#participants-screen-share-content-canvas"),
                        user.userId
                    );
                }
            });
        } else if (payload.state === "Inactive") {
            stream.stopShareView();
            setShareVideo(false);
        }
    });

    // Evento para saber cuando el usuario dejo de compartir pantalla
    client.on("passively-stop-share", (payload) => {
        setInitScreenRecord(false);
    });

    client.on("connection-change", (payload) => {
        if (payload.state === "Closed") {
            Navigate(routes.home.relativePath);
        }
    });

    // Evento para saber cuando el usuario esta hablando
    // client.on("active-speaker", (payload) => {});

    // client.on("device-change", (payload) => {});

    // client.on("user-added", (payload) => {});

    // client.on("user-removed", (payload) => {});

    return (
        <div className="bg-black containter_sdk">
            <div className="top">
                <img src="./assets/icons/wcar_icon.svg" alt="icono wcar" />
                <Speaker />
                <p>Video asistencia wcar</p>
            </div>
            <div
                style={{
                    flexDirection: shareVideo && isMobile ? "column-reverse" : "row",
                    justifyContent: isMobile ? "center" : "space-between",
                }}
                className="middle"
            >
                <div
                    className="user_screens"
                    style={{
                        maxWidth: shareVideo && isMobile ? "630px" : "inherit",
                        width: shareVideo && isMobile ? "100%" : shareVideo && !isMobile ? "25%" : "100%",
                        height: shareVideo ? "100%" : "auto",
                        flexDirection:
                            shareVideo && isMobile
                                ? "row"
                                : shareVideo && !isMobile
                                ? "column"
                                : !shareVideo && isMobile
                                ? "column"
                                : "row",
                    }}
                >
                    <div
                        className="my_video_container"
                        style={{
                            width: !shareVideo && isMobile ? "100%" : shareVideo && !isMobile ? "100%" : "49%",
                            marginBottom: !shareVideo && isMobile ? "10px" : 0,
                        }}
                    >
                        {!initVideo && <img className="icon" src="./assets/icons/wcar_icon.svg" alt="wcar" />}
                        <video className="my_video" id="my-self-view-video"></video>
                    </div>

                    <div
                        className="participant_video_container"
                        style={{
                            width: !shareVideo && isMobile ? "100%" : shareVideo && !isMobile ? "100%" : "49%",
                            marginTop: !shareVideo && isMobile ? "10px" : 0,
                        }}
                    >
                        {!shareVideo && <img className="icon" src="./assets/icons/wcar_icon.svg" alt="wcar" />}
                        <canvas
                            className="participant_video"
                            id="participant-videos-canvas"
                            height="378"
                            width="672"
                        ></canvas>
                    </div>
                </div>

                <div
                    className="participants_screen_container"
                    style={{
                        width: isMobile ? "100%" : "73%",
                        height: "100%",
                        backgroundColor: "#131313",
                        aspectRatio: 16 / 9,
                        borderRadius: "8px",
                        display: shareVideo ? "flex" : "none",
                        alignItems: "center",
                    }}
                >
                    <canvas
                        id="participants-screen-share-content-canvas"
                        style={{
                            width: "100%",
                            aspectRatio: 16 / 9,
                        }}
                    ></canvas>
                </div>

                <video id="my-screen-share-content-video" style={{ display: "none" }}></video>
            </div>
            <div className="bottom">
                <div className="button_group">
                    <div
                        style={{
                            background: initMic ? "#272a31" : "#000000",
                            borderColor: initMic ? "#000000" : "#272a31",
                        }}
                        className="video_button"
                    >
                        <button style={{ borderRightColor: initMic ? "#000000" : "#272a31" }} onClick={audio}>
                            <Mic />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>

                    <div
                        style={{
                            background: initVideo ? "#272a31" : "#000000",
                            borderColor: initVideo ? "#000000" : "#272a31",
                        }}
                        className="video_button"
                    >
                        <button style={{ borderRightColor: initVideo ? "#000000" : "#272a31" }} onClick={video}>
                            <Camera />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>
                </div>

                <div className="button_group">
                    <div
                        style={{
                            background: initScreenRecord ? "#272a31" : "#000000",
                            borderColor: initScreenRecord ? "#000000" : "#272a31",
                        }}
                        className="video_button"
                    >
                        <button style={{ borderRightColor: initScreenRecord ? "#000000" : "#272a31" }} onClick={share}>
                            <ScreenRecord />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>

                    {/* <button className="hand_button">
                        <Hand />
                    </button> */}

                    <div className="video_button exit">
                        <button style={{ borderRight: "none" }} onClick={exit}>
                            <Exit />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>
                </div>

                <div className="display_none button_group">
                    <div className="video_button">
                        <button>
                            <ScreenRecord />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>

                    <div className="video_button exit">
                        <button onClick={exit}>
                            <Exit />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// useEffect(() => {
//     const handleBeforeUnload = (event) => {
//         // Aquí puedes realizar acciones antes de que la ventana se cierre
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     // Limpiar el evento cuando el componente se desmonte
//     return () => {
//         window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
// }, []);
