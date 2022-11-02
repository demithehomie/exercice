import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
        {
            userId: 3,
            username: 'demetrius',
            password: '21124321'
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}


//http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}'