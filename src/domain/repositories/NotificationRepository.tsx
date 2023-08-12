import NotificationEntity from "../entities/NotificationEntity";

export default interface NotificationRepository {
    getNotifications(): Promise<NotificationEntity[]>;
}

export const NotificationRepositoryName = "NotificationRepository";