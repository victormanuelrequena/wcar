export default interface BookHourEntity {
    hourFrom: string;
    hourTo: string;
    available: boolean;
    id: string;
    bookDateId?: string | undefined;
}