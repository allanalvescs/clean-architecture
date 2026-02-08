import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";

export class UserFindOneUseCase {
    constructor(private readonly repository: IUserRepository) {}

    async execute(id: string): Promise<User> {
        const user = await this.repository.findById(id);

        if (!user) {
            throw new Error("usuário não encontrado");
        }

        return user;
    }
}