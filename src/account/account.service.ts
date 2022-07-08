import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/entity/account.entity';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {

  constructor(
    @InjectRepository(Account)
    private readonly accountRepository:Repository<Account>
  ){}

  async create(createAccountDto: CreateAccountDto):Promise<Account> {
    return this.accountRepository.query('INSERT INTO `nestproject`.`account` (`username`, `password`, `role`) VALUES ("'+createAccountDto.username+'", "'+createAccountDto.password+'", "'+createAccountDto.role+'");');
  }

  findAll() {
    return `This action returns all account`;
  }

  async findOne(id: string) {
    return await this.accountRepository.findOne({where:{username: id}})
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    return await this.accountRepository.update(id, updateAccountDto);
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
