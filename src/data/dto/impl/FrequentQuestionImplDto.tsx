import FrequentQuestionEntity from "../../../domain/entities/FrequentQuestionEntity";

//TODO CREATE
const fromJson = (json: any): FrequentQuestionEntity => {
    return {
        id: json.id,
        question: json.question,
        answer: json.answer,
    }
}

const toJson = (entity: FrequentQuestionEntity): any => {
    return {
        id: entity.id,
        question: entity.question,
        answer: entity.answer,
    }
}

export default {
    fromJson,
    toJson,
}