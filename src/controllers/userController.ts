import {Request, Response } from 'express';

import {IUser} from "../entity";
import {userService} from "../services";


class UserController {
    public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.getUsers();
        return res.json(users);
    }
}

export const userController = new UserController();