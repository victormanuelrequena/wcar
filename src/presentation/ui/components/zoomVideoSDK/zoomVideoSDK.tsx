import ZoomVideo from "@zoom/videosdk";
import { useEffect, useState } from "react";
import { generateVideoToken } from "./generateToken";

export const ZoomVideoSDK = () => {
    let client = ZoomVideo.createClient();
    let stream: any;
    const [shareVideo, setShareVideo] = useState(false);

    useEffect(() => {
        const token = generateVideoToken(
            "47A5MLkZR3azitNm6vkw1Q",
            "2H09wgkJkPP5Iy4WOwuvkLpComQVEWDvJnYp",
            "prueba",
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
                    .join("prueba", token, `user-${Math.round(Math.random() * 10000)}`)
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

    client.on("peer-video-state-change", (payload) => {
        stream = client.getMediaStream();
        if (payload.action === "Start") {
            stream.renderVideo(document.querySelector("#participant-videos-canvas"), payload.userId, 672, 378, 0, 0, 3);
        } else if (payload.action === "Stop") {
            stream.stopRenderVideo(document.querySelector("#participant-videos-canvas"), payload.userId);
        }
    });

    client.on("active-share-change", (payload) => {
        stream = client.getMediaStream();
        if (payload.state === "Active") {
            client.getAllUser().forEach((user) => {
                if (user.sharerOn) {
                    stream.startShareView(
                        document.querySelector("#participants-screen-share-content-canvas"),
                        user.userId
                    );
                }
            });
            setShareVideo(true);
        } else if (payload.state === "Inactive") {
            stream.stopShareView();
            setShareVideo(false);
        }
    });

    // client.on("passively-stop-share", (payload) => {});

    // client.on("device-change", (payload) => {});

    // client.on("user-added", (payload) => {});

    return (
        <div className="bg-black" style={{ width: "100%", height: "100vh" }}>
            <div style={{ width: "100%", height: "90%", position: "relative" }}>
                <div
                    className="d-flex justify-content-evenly align-items-center flex-wrap"
                    style={{ width: "100%", height: "90vh" }}
                >
                    <video
                        style={{
                            width: shareVideo ? "15%" : "45%",
                            height: "auto",
                            border: "1px solid red",
                            aspectRatio: 16 / 9,
                            borderRadius: "10px",
                            transform: "scaleX(-1)",
                            position: "absolute",
                            left: shareVideo ? "10%" : "3%",
                            bottom: shareVideo ? "3.3%" : "20%",
                        }}
                        id="my-self-view-video"
                    ></video>

                    {/* <canvas style={{border: "1px solid gray"}} id="my-self-view-canvas" width="720" height="480"></canvas> */}

                    <canvas
                        style={{
                            width: shareVideo ? "15%" : "45%",
                            height: "auto",
                            border: "1px solid blue",
                            aspectRatio: 16 / 9,
                            borderRadius: "10px",
                            transform: "scaleX(-1)",
                            position: "absolute",
                            right: shareVideo ? "10%" : "3%",
                            bottom: shareVideo ? "3.3%" : "20%",
                        }}
                        id="participant-videos-canvas"
                        height="378"
                        width="672"
                    ></canvas>

                    <canvas
                        id="participants-screen-share-content-canvas"
                        style={{
                            width: "80%",
                            height: "auto",
                            border: "1px solid green",
                            aspectRatio: 16 / 9,
                            borderRadius: "10px",
                            display: shareVideo ? "block" : "none",
                        }}
                    ></canvas>

                    <video id="my-screen-share-content-video" style={{ display: "none" }}></video>
                </div>
                <div style={{ width: "100%", height: "10vh", color: "red" }}>
                    <button className="me-5" onClick={videoInit}>
                        Iniciar video
                    </button>
                    <button className="me-5" onClick={videoStop}>
                        Detener video
                    </button>
                    <button className="me-5" onClick={shareScreen}>
                        Compartir mi pantalla
                    </button>
                    <button onClick={shareScreenStop}>Dejar de compartir mi pantalla</button>
                </div>
            </div>
        </div>
    );
};
