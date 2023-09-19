export default interface ZoomedCarComponentProps {
    images: string[];
    changeImage: (index: number) => void;
    currentImage: number;
    close: () => void;
    isOpen: boolean;
}