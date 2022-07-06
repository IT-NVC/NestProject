import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AccountService } from "src/account/account.service";
import { Account } from "src/entity/account.entity";


@Injectable()
export class AuthService {
    constructor(
        private accountService: AccountService,
        private jwtService: JwtService
      ) {}

    async valitdateUser(username : string , password: string){
        const user = await this.accountService.findOne(username)


        if(user && user.password == password)
        {
            const {password,role, ...rest} = user;
            return user;
        }
        return null
    }


    async login(account: Account){
        const payload = {
            name: account.username,
            sub: account.id_username,
            role: account.role
        }

        return{
            access_token : this.jwtService.sign(payload)
        }
    }
}