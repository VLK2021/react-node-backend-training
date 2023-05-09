import {IUser} from "../../entity";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>;

    createUser(user: IUser): Promise<IUser>;
}