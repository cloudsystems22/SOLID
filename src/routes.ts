import { Router, Response, Request } from "express";
import { createUserController, createUserUseCase } from "./useCases/CreateUser";
const router = Router();

router.post('/users', (req:Request, res:Response) => {
    return createUserController.handle(req, res); 
})

export { router }