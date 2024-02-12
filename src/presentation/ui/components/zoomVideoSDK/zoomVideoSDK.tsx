import ZoomVideo from "@zoom/videosdk";
import { useEffect } from "react";
import { generateVideoToken } from "../../pages/joinTheCall/generateToken";

export const ZoomVideoSDK = () => {
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

        console.log(token);

        let client = ZoomVideo.createClient();
        let stream: any;

        if (ZoomVideo.checkSystemRequirements().video && ZoomVideo.checkSystemRequirements().audio) {
            client.init("en-US", "Global", { patchJsMedia: true }).then(() => {
                client
                    .join("prueba", token, `user-${Math.round(Math.random() * 10000)}`)
                    .then((res) => {
                        console.log(res);
                        stream = client.getMediaStream();
                        if (stream.isRenderSelfViewWithVideoElement()) {
                            stream
                                .startVideo({ videoElement: document.querySelector("#my-self-view-video") })
                                .then(() => {
                                    // video successfully started and rendered
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        } else {
                            stream
                                .startVideo()
                                .then(() => {
                                    stream
                                        .renderVideo(
                                            document.querySelector("#my-self-view-canvas"),
                                            client.getCurrentUserInfo().userId,
                                            1920,
                                            1080,
                                            0,
                                            0,
                                            3
                                        )
                                        .then(() => {
                                            // video successfully started and rendered
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }
                        client.getAllUser().forEach((user) => {
                            if (user.bVideoOn) {
                                stream.renderVideo(
                                    document.querySelector("#participant-videos-canvas"),
                                    user.userId,
                                    1920,
                                    1080,
                                    0,
                                    0,
                                    3
                                );
                            }
                        });
                    })
                    .catch((e) => console.error(e));
            });

            return () => {
                client.leave();
            };
        }
    }, []);

    return (
        <>
            <video id="my-self-view-video" width="250" height="250"></video>
            <canvas id="my-self-view-canvas" width="250" height="250"></canvas>
            <canvas id="participant-videos-canvas" width="250" height="250"></canvas>
        </>
    );
};
