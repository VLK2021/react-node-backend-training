import {Router} from 'express';

import {userController} from "../controllers";


const router = Router();

router.get('/', userController.getAll);
router.delete('/:id', userController.deleteUser);

export const userRouter = router;
