import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserOrderDto } from './dto/userOrder.dto';

@Injectable()
export class UserService {
  query(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createUserDto){
    return await this.userRepository.query('INSERT INTO `nestproject`.`user` (`Name`, `Address`, `Phone`) VALUES ("'+createUserDto.Name+'", "'+createUserDto.Address+'", "'+createUserDto.Phone+'");');
  }

  async createSingup(createUserDto,id_username: number) {
    return await this.userRepository.query('INSERT INTO `nestproject`.`user` (`Name`, `Address`, `Phone`, `username`, `usernameIdUsername`) VALUES ("'+createUserDto.Name+'", "'+createUserDto.Address+'", "'+createUserDto.Phone+'", "'+createUserDto.username+'", '+id_username+');')
  }

  // findAllInforUser() {
  //   return `This action returns all user`;
  // }

  async findAllInforUser(username: string): Promise<User>{
    return await this.userRepository.query(`select account.username, account.password, Name, Address, Phone
    from account, user
    where account.username = user.username and account.username = '`+username+`'`);
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update({username:username}, updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  async findOneOrder(createUserDto): Promise<User> {
    return await this.userRepository.findOne({where : {Name: createUserDto.Name, Phone: createUserDto.Phone}})
  }
}
