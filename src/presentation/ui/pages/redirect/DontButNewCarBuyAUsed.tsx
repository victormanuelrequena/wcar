import { useEffect } from "react";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

export default function DontButNewCarBuyAUsed() {
    useEffect(() => {
        window.location.href = "https://no-compres-auto-nuevo-elige-un-usado.wcar.co";
    }, []);
    return (
        <div>
            <LoadingComponent />
        </div>
    );
}
