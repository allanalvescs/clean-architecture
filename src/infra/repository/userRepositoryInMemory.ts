import { UserCreateDto } from "../../app/dtos/userCreateDto";
import { UserUpdateDto } from "../../app/dtos/userUpdateDto";
import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
    private users: User[] = [];
    
    async save(dto: UserCreateDto): Promise<User> {
        const user = new User(dto.name, dto.email, dto.password);
        this.users.push(user);

        return user;
    };

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find((user) => user.id === id) || null;
    }

    async update(id: string, user: User): Promise<boolean> {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) return false;

        this.users[userIndex] = user;
        return true;
    }

    async delete(id: string): Promise<boolean> {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) return false;

        this.users.splice(userIndex, 1);
        return true;
    }
}