import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { UserCreateDto } from "../dtos/userCreateDto";

export class UserCreateUseCase {
    constructor(private readonly repository: IUserRepository) {}

    async execute(data: UserCreateDto): Promise<User> {
        const user = await this.repository.findByEmail(data.email);

        if (user) {
            throw new Error("User already exists");
        }

        const newUser = new User(null, data.name, data.email, data.password);

        return this.repository.save(newUser);

    }
}