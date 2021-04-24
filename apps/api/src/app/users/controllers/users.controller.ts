import { UserDTO } from '@dto';
import { UsersService } from './../services/users.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() body: UserDTO) {
    return this.userService.create(body);
  }

  @Get()
  list() {
    return this.userService.findAll();
  }
  @Get(':id')
  findone(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body:UserDTO) {
    return this.userService.update(parseInt(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
