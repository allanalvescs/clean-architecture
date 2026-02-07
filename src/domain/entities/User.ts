import { v4 } from "uuid"

export class User {
    private _id: string;
    private _name: string;
    private _email: string;
    private _password: string

    constructor(
        _id: string | null,
        _name: string,
        _email: string,
        _password: string
    ) {
        this._id = _id ? _id : this.genereteId();
        this._name = _name;
        this._email = _email;
        this._password = _password;

        this.validateFields();
    }

    private genereteId(): string {
        const uuid = v4();

        return uuid;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    private validateFields(): void {
        if (this.name.length < 3) {
            throw new Error("Name must be at least 3 characters long");
        }

        if (this.name.length > 255) {
            throw new Error("Name must be less than 255 characters long");
        }

        if (!this.email.includes("@")) {
            throw new Error("Email must be valid");
        }

        if (this.password.length < 6) {
            throw new Error("Password must be at least 6 characters long");
        }

        if (this.password.length > 20) {
            throw new Error("Password must be less than 20 characters long");
        }
    }
}