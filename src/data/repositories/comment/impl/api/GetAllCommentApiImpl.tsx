import CommentEntity from "../../../../../domain/entities/CommentEntity";
import CommentImplDto from "../../../../dto/impl/CommentImplDto";

const GetAllApiImpl = async (): Promise<CommentEntity[]> => {
    const relativeUrl = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJNxNRbCqbP44RoToUttvg5Nc&fields=reviews&key=AIzaSyA9lFZJE4wQ3Y2cVU3F8qP-e5ngOpkOLOc&reviews_no_translations=true';
    try {
        const response = await fetch(relativeUrl).then((response) => response.json());
        const parsed =  response.result.reviews.map((comment: any) => CommentImplDto.fromJson(comment));
        return parsed.filter((comment: CommentEntity) => comment.calification >3);
    } catch (error) {
        return [];
    }
}

export default GetAllApiImpl;