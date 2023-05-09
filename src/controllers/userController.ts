import {Request, Response } from 'express';

import {IUser} from "../entity";
import {userService} from "../services";


class UserController {
    public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.getUsers();
        return res.json(users);
    }

    public async createUser(req: Request, res:Response): Promise<Response<IUser>> {
        const createUser = userService.createdUser(req.body);
        return res.json(createUser);
    }
}

export const userController = new UserController();