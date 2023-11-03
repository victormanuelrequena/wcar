import BlogPostEntity from "../../../domain/entities/BlogPostEntity";
import UserImplDto from "./UserImplDto";

//TODO CREATE REAL DTO
const fromJson = (json: any): BlogPostEntity => {
    return {
        id: json.id,
        title: json.title,
        tagName: json.tagName,
        createdAt: json.created_at,
        photoUrl: json.photoUrl,
        user: UserImplDto.fromJson(json.user),
        content: json.content,
    };
};

const toJson = (blog: BlogPostEntity): any => {
    return {
        id: blog.id,
        title: blog.title,
        tag_name: blog.tagName,
        created_at: blog.createdAt,
        photo_url: blog.photoUrl,
        user: UserImplDto.toJson(blog.user),
        content: blog.content,
    };
};

export default {
    fromJson,
    toJson,
};
