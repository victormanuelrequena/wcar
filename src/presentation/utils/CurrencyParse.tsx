const toCop = (value: number):string => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value).replace(',00', '');
}

const copToNumber = (value: string):number => {
    return parseInt(value.replace('$', '').replace('.', '').replace(',', ''));
}

export default {
    toCop,
    copToNumber,
};