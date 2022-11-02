
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    id: number;
    description: string;
}

export interface IQuery {
    allusers(): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export interface IMutation {
    createUser(description: string): User | Promise<User>;
}

type Nullable<T> = T | null;
