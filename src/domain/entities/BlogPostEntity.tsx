import UserEntity from "./UserEntity";

export default interface BlogPostEntity {
    id: string,
    title: string,
    tagName: string,
    createdAt: Date,
    photoUrl: string,
    user: UserEntity,
    content?: string | undefined,
}