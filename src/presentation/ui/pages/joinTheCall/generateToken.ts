import { KJUR } from "jsrsasign";

// eslint-disable-next-line max-params
export function generateVideoToken(
    sdkKey: string,
    sdkSecret: string,
    topic: string,
    passWord = "",
    sessionKey = "",
    userIdentity = "",
    roleType = 1,
    cloud_recording_option = "",
    cloud_recording_election = "",
    telemetry_tracking_id = ""
) {
    let signature = "";
    try {
        const iat = Math.round(new Date().getTime() / 1000) - 30;
        const exp = iat + 60 * 60 * 2;
        // Header
        const oHeader = { alg: "HS256", typ: "JWT" };
        // Payload
        let oPayload = {
            app_key: sdkKey,
            iat,
            exp,
            tpc: topic,
            pwd: passWord,
            role_type: roleType,
        };
        if (cloud_recording_option === "1") {
            Object.assign(oPayload, { cloud_recording_option: 1 });
        } else {
            Object.assign(oPayload, { cloud_recording_option: 0 });
        }

        if (cloud_recording_election === "1") {
            Object.assign(oPayload, { cloud_recording_election: 1 });
        } else {
            Object.assign(oPayload, { cloud_recording_election: 0 });
        }

        if (sessionKey || sessionKey === "") {
            Object.assign(oPayload, { session_key: sessionKey });
        }
        if (userIdentity || userIdentity === "") {
            Object.assign(oPayload, { user_identity: userIdentity });
        }

        if (telemetry_tracking_id) {
            Object.assign(oPayload, { telemetry_tracking_id });
        }
        // Sign JWT
        const sHeader = JSON.stringify(oHeader);
        const sPayload = JSON.stringify(oPayload);
        signature = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);
    } catch (e) {
        console.error(e);
    }
    console.log(signature);
    return signature;
}
