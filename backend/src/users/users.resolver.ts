import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

type User = {
    id: number
    description: string
}

@Resolver()
export class UsersResolver {



    private /* readonly */ list: Array<User > = []

    @Query()
    allusers() {
        return this.list;
    }

    @Mutation()
    createUser(@Args('description') description: string) {
        const user = {
            id: this.list.length,
            description,
        };
        this.list.push(user);
        return user;
    
    }

}