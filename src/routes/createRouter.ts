import {Router} from 'express';

import {userController} from "../controllers";


const router = Router();


router.post('/', userController.createUser);

export const createRouter = router;