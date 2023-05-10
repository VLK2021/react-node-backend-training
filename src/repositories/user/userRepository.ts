import {EntityRepository, getManager, Repository} from "typeorm";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

import {IUser, User} from "../../entity";
import {IUserRepository} from "./userRepository.interface";


dayjs.extend(utc);

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async getUsers() {
        return getManager().getRepository(User).find();
    }

    public async createUser(user: IUser) {
        return getManager().getRepository(User).save(user);
    }

    public async deleteUser(id: number) {
        return getManager().getRepository(User).softDelete({ id });
    }
}

export const userRepository = new UserRepository();