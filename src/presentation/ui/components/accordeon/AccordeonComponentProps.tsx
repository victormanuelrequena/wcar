export default interface AccordeonComponentProps {
    title: React.ReactNode;
    subtitle?: String | undefined;
    options: {
        title: String;
        content: String;
    }[];
}