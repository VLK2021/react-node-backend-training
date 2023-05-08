import {IUser} from "../entity";
import {userRepository} from "../repositories";


class UserService {
    public async getUsers(): Promise<IUser[]> {
        return userRepository.getUsers();
    }
}

export const userService = new UserService();