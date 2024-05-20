import {Router} from 'express'

import { UserController } from './controller/UserController'
import { AuthController } from './controller/AuthController'
import { AuthMiddleware } from './middlewares/auth'
const userController = new UserController()
const authController = new AuthController()

export const router = Router();

router.post('/create', userController.store)
router.get('/users', AuthMiddleware, userController.index)
router.post('/auth', authController.authenticate)