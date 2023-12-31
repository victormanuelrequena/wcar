import { FC, useState } from "react";
import "../zommedCar/ZoomedCarComponentStyles.scss";
import Icons from "../../../../../assets/Icons";
// import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

interface PreviewImageProps {
    imageUrl: string;
    close: () => void;
    idColserauto?: string;
}

// function ImageMagnifier({
//     src,
//     width,
//     height,
//     magnifierHeight = 200,
//     magnifieWidth = 200,
//     zoomLevel = 1.8,
// }: {
//     src: string;
//     width?: string;
//     height?: string;
//     magnifierHeight?: number;
//     magnifieWidth?: number;
//     zoomLevel?: number;
// }) {
//     const [[x, y], setXY] = useState([0, 0]);
//     const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
//     const [showMagnifier, setShowMagnifier] = useState(false);
//     return (
//         <div
//             style={{
//                 position: "relative",
//                 height: height,
//                 width: width,
//             }}
//         >
//             <img
//                 src={src}
//                 style={{ height: height, width: width }}
//                 onMouseEnter={(e) => {
//                     // update image size and turn-on magnifier
//                     const elem = e.currentTarget;
//                     const { width, height } = elem.getBoundingClientRect();
//                     setSize([width, height]);
//                     setShowMagnifier(true);
//                 }}
//                 onMouseMove={(e) => {
//                     // update cursor position
//                     const elem = e.currentTarget;
//                     const { top, left } = elem.getBoundingClientRect();

//                     // calculate cursor position on the image
//                     const x = e.pageX - left - window.pageXOffset;
//                     const y = e.pageY - top - window.pageYOffset;
//                     setXY([x, y]);
//                 }}
//                 onMouseLeave={() => {
//                     // close magnifier
//                     setShowMagnifier(false);
//                 }}
//                 alt={"img"}
//             />

//             <div
//                 style={{
//                     display: showMagnifier ? "" : "none",
//                     position: "absolute",

//                     // prevent maginier blocks the mousemove event of img
//                     pointerEvents: "none",
//                     // set size of magnifier
//                     height: `${magnifierHeight}px`,
//                     width: `${magnifieWidth}px`,
//                     // move element center to cursor pos
//                     top: `${y - magnifierHeight / 2}px`,
//                     left: `${x - magnifieWidth / 2}px`,
//                     opacity: "1", // reduce opacity so you can verify position
//                     border: "1px solid lightgray",
//                     backgroundColor: "white",
//                     backgroundImage: `url('${src}')`,
//                     backgroundRepeat: "no-repeat",

//                     //calculate zoomed image size
//                     backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,

//                     //calculete position of zoomed image.
//                     backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
//                     backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
//                 }}
//             ></div>
//         </div>
//     );
// }
const PreviewImage: FC<PreviewImageProps> = ({ imageUrl, idColserauto, close }) => {
    console.log(`https://apps.colserauto.com/ReportesColserauto/Pdf/PeritajeComercial/${idColserauto}.pdf`);
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    return (
        <div className="zoom_car_component">
            <div className="close hover z-index-10" onClick={close}>
                <Icons.Clear />
            </div>
            <div className="zoom_car_component_image_container">
                <div className="closer" onClick={close}></div>
                {idColserauto ? (
                    <iframe
                        title="pdf"
                        className="pdf-viewer"
                        src={`https://apps.colserauto.com/ReportesColserauto/Pdf/PeritajeComercial/${idColserauto}.pdf`}
                    />
                ) : (
                    <img src="/assets/no-peritaje.png" alt="No existe peritaje para este auto" />
                )}

                {/* <div className="pdf_container" style={{ height: "95vh", overflow: "auto" }}>
                    <Document
                        file={{
                            url: `https://apps.colserauto.com/ReportesColserauto/Pdf/PeritajeComercial/${idColserauto}.pdf`,
                        }}
                        loading="Cargando Documento"
                        error="Error al cargar el documento"
                    >
                        <Page pageNumber={1} />
                    </Document>
                </div> */}
            </div>
        </div>
    );
};

export default PreviewImage;
