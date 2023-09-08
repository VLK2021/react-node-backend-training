import {Request, Response } from 'express';
import {UpdateResult} from "typeorm";

import {IUser} from "../entity";
import {userService} from "../services";


class UserController {
    public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.getUsers();
        return res.json(users);
    }

    public async createUser(req: Request, res:Response): Promise<Response<IUser>> {
        const createUser = await userService.createdUser(req.body);
        return res.json(createUser);
    }

    public async deleteUser(req: Request, res:Response): Promise<Response<UpdateResult>> {
        const {id} = req.params;
        const deletedUser = await userService.deleteUser(+id);
        return res.json(deletedUser);
    }

    public async updateUser(req: Request, res:Response): Promise<Response<UpdateResult>> {
        const {id} = req.params;
        const {email, password, city} = req.body;
        const updateUser = await userService.updateUser(+id, email, password, city);
        return res.json(updateUser);
    }
}

export const userController = new UserController();