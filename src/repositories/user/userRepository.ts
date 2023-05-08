import {EntityRepository, getManager, Repository} from "typeorm";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

import {User} from "../../entity";
import {IUserRepository} from "./userRepository.interface";


dayjs.extend(utc);

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async getUsers() {
        return getManager().getRepository(User).find();
    }
}

export const userRepository = new UserRepository();