import bcrypt from 'bcrypt';

import {IUser} from "../entity";
import {userRepository} from "../repositories";
import {UpdateResult} from "typeorm";


class UserService {
    public async getUsers(): Promise<IUser[]> {
        return userRepository.getUsers();
    }

    public async createdUser(user: IUser): Promise<IUser> {
        const {password} = user;
        const hashPassword = await UserService._hashPassword(password);
        const dataToSave = {...user, password: hashPassword};
        return userRepository.createUser(dataToSave);
    }

    public async deleteUser(id: number): Promise<UpdateResult> {
        return userRepository.deleteUser(id);
    }

    private static async _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

}

export const userService = new UserService();