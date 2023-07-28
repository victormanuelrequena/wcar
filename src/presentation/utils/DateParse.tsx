const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']

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
    return `${month} ${day} / ${year}`;
}


export default {
    dateToMonthDay,
    dateToMonthDayYear,
}
