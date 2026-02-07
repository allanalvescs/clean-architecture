import { v4 } from "uuid"

export class User {
    private _id: string;

    constructor(
        private _name: string,
        private _email: string,
        private _password: string
    ) {
        this._id = this.genereteId();
        this._name = _name;
        this._email = _email;
        this._password = _password;
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
}