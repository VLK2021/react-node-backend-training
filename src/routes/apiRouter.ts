import {Router} from "express";

import {userRouter} from "./userRouter";
import {createRouter} from "./createRouter";



const router = Router();

router.use('/users', userRouter);
router.use('/create', createRouter);


export const apiRouter = router;