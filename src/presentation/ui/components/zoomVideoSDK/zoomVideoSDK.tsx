import ZoomVideo from "@zoom/videosdk";
import { useEffect } from "react";
import { generateVideoToken } from "./generateToken";

export const ZoomVideoSDK = () => {
    let client = ZoomVideo.createClient();
    let stream: any;

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
                        stream.startAudio();
                    })
                    .catch((e) => console.error(e));
            });

            return () => {
                client.leave();
            };
        }
    }, []);

    const prueba = () => {
        stream = client.getMediaStream();
        console.log("nuevo usuario");

        client.getAllUser().forEach((user) => {
            if (user.bVideoOn) {
                const canvasId = `#participant-videos-canvas`;
                stream
                    .renderVideo(document.querySelector(canvasId), user.userId, 672, 378, 0, 0, 3)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((e) => console.error(e));
            }
        });
    };

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

    // client.on("device-change", () => {
    //     stream = client.getMediaStream();
    //     const newCamera = stream.getCameraList();
    // });

    client.on("user-added", (payload) => {
        prueba();
    });

    return (
        <div className="bg-black" style={{ width: "100%", height: "100vh" }}>
            <div
                className="d-flex justify-content-evenly align-items-center flex-wrap"
                style={{ width: "100%", height: "90vh" }}
            >
                <video
                    style={{
                        border: "1px solid red",
                        width: "672px",
                        height: "378px",
                        borderRadius: "10px",
                        transform: "scaleX(-1)",
                    }}
                    id="my-self-view-video"
                ></video>

                {/* <canvas style={{border: "1px solid gray"}} id="my-self-view-canvas" width="720" height="480"></canvas> */}

                <canvas
                    style={{
                        border: "1px solid blue",
                        width: "672px",
                        height: "378px",
                        borderRadius: "10px",
                        transform: "scaleX(-1)",
                    }}
                    id="participant-videos-canvas"
                    height="378"
                    width="672"
                ></canvas>
                {/* <canvas
                key={newUser}
                style={{ border: "1px solid blue", width: "672px", height: "378px", borderRadius: "10px" }}
                id="participant-videos-canvas2"
                height="378"
                width="672"
            ></canvas> */}
            </div>
            <div style={{ width: "100%", height: "10vh", color: "red" }}>
                <button className="me-5" onClick={prueba}>Ver video</button>
                <button className="me-5" onClick={videoInit}>
                    Iniciar video
                </button>
                <button onClick={videoStop}>
                    Detener video
                </button>
            </div>
        </div>
    );
};
