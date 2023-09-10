const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const dateToMonthDay = (date: Date): string => {
    //date to month day in spanish
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}`;
}

const dateToMonthDayYear = (date: Date): string => {
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

const dateToMMDDYYYY = (date: Date): string => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

const dateFromString = (date: string): Date => {
    const [year, month, day] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

const stringFromDate = (date: Date): string => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

export default {
    dateToMonthDay,
    dateToMMDDYYYY,
    dateToMonthDayYear,
    dateFromString,
    stringFromDate,
}
