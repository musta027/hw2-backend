import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth-middleware';
import AuthController from './auth-controller';
import AuthService from './auth-service';

const authRouter = Router();

const authService = new AuthService();
const authController = new AuthController(authService);


export default authRouter;
