import CommentEntity from "../../../../../domain/entities/CommentEntity";
import CommentImplDto from "../../../../dto/impl/CommentImplDto";

const GetAllApiImpl = async (): Promise<CommentEntity[]> => {
    // const api = "AIzaSyD8q92si456MOmd_nZIQnL_EcvPteWc2K8";
    const api = "AIzaSyA9lFZJE4wQ3Y2cVU3F8qP-e5ngOpkOLOc"; //my
    const relativeUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJNxNRbCqbP44RoToUttvg5Nc&fields=reviews&key=${api}&reviews_no_translations=true`;

    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    try {
        const response = await fetch(relativeUrl, {
            method: 'GET',
            // mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*/*',
                // 'Authorization': getToken(),
            },
        }).then((response) => response.json());
        const parsed = response.result.reviews.map((comment: any) => CommentImplDto.fromJson(comment));
        return parsed.filter((comment: CommentEntity) => comment.calification > 3);
    } catch (error) {
        return [];
    }
}

export default GetAllApiImpl;