import { hash } from "bcryptjs";
import { prisma } from "../utils/prisma";


export class UserController {

    async index(req: Request, res: Response) {
        const users = await prisma.user.findMany()
        return res.json({ users })
    }

    async store(req: Request, res: Response) {
        const {name, email, password } = req.body;
         
        const userExists = await prisma.user.findUnique({where: {email}})

        if(userExists) {
            return res.json({error: "User exists"})
        }

        const hash_password = hash(password, 8)
        const user = await prisma.user.create({
            data: {
                name, 
                email, 
                password: hash_password
                }
        })
        return res.json({ user })
    }
}