import UserAccountEntity from "./UserAccountEntity";

export enum UserEntityStatus { active = 'active',  deleted = 'deleted' }
export enum UserPermision { 
}
export default interface UserEntity extends UserAccountEntity {
    permisions: UserPermision[],
    status: UserEntityStatus,
    photo: string,
}