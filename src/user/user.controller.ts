import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Account } from 'src/entity/account.entity';
import { AccountService } from 'src/account/account.service';
import { CreateAccountDto } from 'src/account/dto/create-account.dto';
import { Role } from 'src/Role/role.num';

@Controller('nestProject/user')
export class UserController {
  constructor(private readonly userService: UserService,
              private readonly accountService: AccountService
    ) {}


  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    let username = createUserDto.username;
    let account = await this.accountService.findOne(username);

    if(account)
    {
      return 'Ten dang nhap da ton tai!'
    }
    else
    {
      let newAccount = {
        username: createUserDto.username, password: createUserDto.password,
        role: Role.User
      }

      //insert account
      await this.accountService.create(newAccount);

      //get account new
      let account = await this.accountService.findOne(newAccount.username);
      return await this.userService.createSingup(createUserDto, account.id_username);
    }

  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  @Get(':username')
  async findOne(@Param('username') username: string) {
    return await this.userService.findAllInforUser(username);
  }

  @Patch(':username')
  update(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(username, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
