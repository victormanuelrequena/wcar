import OrderByEntity from "../../../domain/entities/OrderByEntity";

//TODO CREATE
const fromJson = (json: any): OrderByEntity => {
    return {
        label: json.label,
        value: {
            keyname: json.field,
            desc: json.order === "desc",
            warranty: json.warranty,
        },
    };
};

const toJson = (orderBy: OrderByEntity): any => {
    return {
        field: orderBy.value.keyname,
        order: orderBy.value.desc === undefined ? undefined : orderBy.value.desc ? "desc" : "asc",
        warranty: orderBy.value.warranty,
    };
};

export default {
    fromJson,
    toJson,
};
