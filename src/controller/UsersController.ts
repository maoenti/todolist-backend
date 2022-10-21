import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Users } from "../entity/Users"

export class UsersController {

    private userRepository = AppDataSource.getRepository(Users);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOneByOrFail({id: request.params.id})
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }

    // async update(request: Request, response: Response, next: NextFunction) {
    //     const updUser = await this.userRepository.findOneByOrFail({ id: request.params.id })
    //     updUser.taskName = updUser.taskName == request.body.taskName ? updUser.taskName : request.body.taskName
    //     updUser.deadline = updUser.deadline == request.body.deadline ? updUser.deadline : request.body.deadline
    //     updUser.isDone = updUser.isDone == request.body.isDone ? updUser.isDone : request.body.isDone
    //     await this.userRepository.update(
    //         { id: request.params.id }, 
    //         {
    //             isDone: updUser.isDone,
    //             taskName: updUser.taskName, 
    //             deadline: updUser.deadline
    //         })
    //     return this.userRepository.findOneByOrFail({id: request.params.id})
    // }

    async remove(request: Request, response: Response, next: NextFunction) {
        const userToRemove = await this.userRepository.findOneByOrFail({ id: request.params.id })
        return this.userRepository.remove(userToRemove)
    }
}