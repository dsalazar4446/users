import { Module } from '@nestjs/common';
import { UsersController } from './controllers';
import { User } from './models/user.model';
import { UsersService } from './services';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
