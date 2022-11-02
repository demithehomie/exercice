import { Module, Options } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [

    GraphQLModule.forRoot<ApolloDriverConfig>( {
      driver: ApolloDriver,
      playground: true,
      definitions: {
        path: join(process.cwd(), '/src/graphql.schema.d.ts'),  //vai buscar esse esquema em qualquer lugar onde ele estiver dentro da minha aplicação
      },

      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
       // requireResolversForResolveType: boolean
      },

    }),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
