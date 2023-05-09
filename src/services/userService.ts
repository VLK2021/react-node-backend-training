import bcrypt from 'bcrypt';

import {IUser} from "../entity";
import {userRepository} from "../repositories";


class UserService {
    public async getUsers(): Promise<IUser[]> {
        return userRepository.getUsers();
    }

    public async createdUser(user: IUser): Promise<IUser> {
        const {password} = user;
        const hashPassword = await this._hashPassword(password);
        const dataToSave = {...user, password: hashPassword};
        return userRepository.createUser(dataToSave);
    }



    private async _hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }
}

export const userService = new UserService();