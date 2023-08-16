import InsuranceEntity from "../../../domain/entities/InsuranceEntity";

//TODO CREATE
const fromJson = (json: any): InsuranceEntity => {
    return {
        id: json.id,
        name: json.name,
    }
}

const toJson = (insurance: InsuranceEntity): any => {
    return {
        id: insurance.id,
        name: insurance.name,
    }
}

export default {
    fromJson,
    toJson,
}