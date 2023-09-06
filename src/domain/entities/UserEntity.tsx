import UserAccountEntity from "./UserAccountEntity";

export enum UserEntityStatus { active = 'active',  deleted = 'deleted' }
export enum UserRole { 
    CUSTOMER = 'customer',
}
export default interface UserEntity extends UserAccountEntity {
    role: UserRole,
    status: UserEntityStatus,
    photo?: string | undefined,
}