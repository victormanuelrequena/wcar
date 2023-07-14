const dateToMonthDay = (date: Date): string => {
    //date to month day in spanish
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}`;
}

export default {
    dateToMonthDay,
}
