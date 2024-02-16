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

export const ZoomVideoSDK = () => {
    const Navigate = useNavigate();
    let client = ZoomVideo.createClient();
    let stream: any;
    const [shareVideo, setShareVideo] = useState(false);
    const [initVideo, setInitVideo] = useState(false);
    const [initMic, setInitMic] = useState(false);
    const [initScreenRecord, setInitScreenRecord] = useState(false);

    useEffect(() => {
        const token = generateVideoToken(
            "47A5MLkZR3azitNm6vkw1Q",
            "2H09wgkJkPP5Iy4WOwuvkLpComQVEWDvJnYp",
            "pruebaa",
            "",
            "",
            "",
            1,
            "",
            "",
            ""
        );

        if (ZoomVideo.checkSystemRequirements().video && ZoomVideo.checkSystemRequirements().audio) {
            client.init("en-US", "Global", { patchJsMedia: true }).then(() => {
                client
                    .join("pruebaa", token, `user-${Math.round(Math.random() * 10000)}`)
                    .then((res) => {
                        stream = client.getMediaStream();
                        stream.startAudio().then(() => {
                            alert("se inicio la llamada con audio");
                        });
                    })
                    .catch((e) => console.error(e));
            });

            return () => {
                client.leave();
            };
        }
    }, []);

    const videoInit = () => {
        stream = client.getMediaStream();
        if (stream.isRenderSelfViewWithVideoElement()) {
            stream
                .startVideo({
                    hd: true,
                    videoElement: document.querySelector("#my-self-view-video"),
                })
                .then(() => {
                    // video successfully started and rendered
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const videoStop = () => {
        stream = client.getMediaStream();
        stream.stopVideo();
    };

    const mute = () => {
        stream = client.getMediaStream();
        stream.muteAudio();
    };

    const unMute = () => {
        stream = client.getMediaStream();
        stream.unmuteAudio();
    };

    const shareScreen = () => {
        stream = client.getMediaStream();
        stream
            .startShareScreen(document.querySelector("#my-screen-share-content-video"))
            .then(() => {
                // screen share successfully started and rendered
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const shareScreenStop = () => {
        stream = client.getMediaStream();
        stream.stopShareScreen();
    };

    const exit = () => {
        client.leave().then(() => {
            Navigate(routes.home.relativePath);
        });
    };

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

    // Evento para saber cuando el usuario esta hablando
    client.on("active-speaker", (payload) => {});

    // client.on("passively-stop-share", (payload) => {});

    // client.on("device-change", (payload) => {});

    // client.on("user-added", (payload) => {});

    return (
        <div className="bg-black containter_sdk">
            <div className="top">
                <img src="./assets/icons/wcar_icon.svg" alt="icono wcar" />
                <Speaker />
                <p>Video asistencia wcar</p>
            </div>
            <div className="middle">
                <div
                    className="user_screens"
                    style={{
                        justifyContent: "space-between",
                        width: shareVideo ? "25%" : "100%",
                        height: shareVideo ? "100%" : "auto",
                        flexDirection: shareVideo ? "column" : "row",
                    }}
                >
                    <div className="my_video_container" style={{ width: shareVideo ? "100%" : "49%" }}>
                        <video className="my_video" id="my-self-view-video"></video>
                    </div>

                    <div className="participant_video_container" style={{ width: shareVideo ? "100%" : "49%" }}>
                        <canvas
                            className="participant_video"
                            id="participant-videos-canvas"
                            height="378"
                            width="672"
                        ></canvas>
                    </div>
                </div>

                <div
                    style={{
                        width: "73%",
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
                    <div className="video_button">
                        <button
                            onClick={() => {
                                !initMic ? mute() : unMute();
                                setInitMic(!initMic);
                            }}
                        >
                            <Mic />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>

                    <div className="video_button">
                        <button
                            onClick={() => {
                                initVideo ? videoStop() : videoInit();
                                setInitVideo(!initVideo);
                            }}
                        >
                            <Camera />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>
                </div>

                <div className="button_group">
                    <div className="video_button">
                        <button
                            onClick={() => {
                                initScreenRecord ? shareScreenStop() : shareScreen();
                                setInitScreenRecord(!initScreenRecord);
                            }}
                        >
                            <ScreenRecord />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>

                    <button className="hand_button">
                        <Hand />
                    </button>

                    <div className="video_button exit">
                        <button onClick={exit}>
                            <Exit />
                        </button>
                        <div>
                            <ThreeDots />
                        </div>
                    </div>
                </div>

                <div style={{ visibility: "hidden" }} className="button_group">
                    <div className="video_button">
                        <button
                            onClick={() => {
                                initScreenRecord ? shareScreenStop() : shareScreen();
                                setInitScreenRecord(!initScreenRecord);
                            }}
                        >
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
