import { UserDTO } from '@dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  create(user: UserDTO): Promise<User> {
    try {
      return this.userModel.create(user);

    } catch (error) {
      console.log('error',error);

    }
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: number): Promise<User> {
    return this.userModel.findOne({
      where: {
        idUser:id,
      },
    });
  }

  update(id: number, user: UserDTO){
    return this.userModel.update(user, {
      returning: true,
      where: { idUser: id },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
