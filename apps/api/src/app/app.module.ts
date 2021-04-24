import { User } from './users/models/user.model';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '.nava446',
      database: 'users',
      models: [User],
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
