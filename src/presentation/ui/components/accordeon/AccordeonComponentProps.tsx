export default interface AccordeonComponentProps {
    title: React.ReactNode;
    subtitle: String;
    options: {
        title: String;
        content: String;
    }[];
}