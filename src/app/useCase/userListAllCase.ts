import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";

export class UserListAllUseCase {
    constructor(private readonly repository: IUserRepository) {}

    async execute(): Promise<User[]> {
        return this.repository.findAll();
    }
}