import { ResponsiveType } from "react-multi-carousel";

export default interface SliderComponentProps {
    children: React.ReactNode[];
    responsive?: ResponsiveType;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    afterChange?: (currentSlide: number) => void;
    infinite?: boolean;
}