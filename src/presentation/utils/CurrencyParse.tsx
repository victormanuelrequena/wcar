const toCop = (value: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value).replace(',00', '');
}

export default {
    toCop,
};