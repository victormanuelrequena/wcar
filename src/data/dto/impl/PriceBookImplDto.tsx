import PriceBookEntity from "../../../domain/entities/PriceBookEntity";

//TODO make real
const fromJson = (json: any):PriceBookEntity => {
    return {
        total: json.total,
        subtotal: json.subtotal,
        rest: json.rest,
    }
}

const toJson = (priceBook: PriceBookEntity): any => {
    return {
        total: priceBook.total,
        subtotal: priceBook.subtotal,
        rest: priceBook.rest,
    }
}

export default {
    fromJson,
    toJson,
}