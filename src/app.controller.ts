import { Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { Request } from "@nestjs/common";
import {Response} from "express"
import { userInfo } from "os";
import { AuthService } from "./Auth/auth.service";
import { JwtAuthGuard } from "./Auth/jwt-auth.guard";
import { LocalAuthGuard } from "./Auth/local-auth.guard";
import { Account } from "./entity/account.entity";

@Controller('nestProject/login')
export class AppController{
    constructor(private readonly authService: AuthService){}
    

    
    @Get()
    async loginApp(@Res() res:Response){
        res.render('Auth/login')
    }

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req,@Res() res: Response){
        let user = await this.authService.login(req.user)
        res.cookie('auth-cookie', user, {httpOnly: true})

        return res.redirect('/nestProject/products')
    }

    @Get()
    async logoutApp(@Res() res:Response){
        res.render('Auth/login')
    }



    // @UseGuards(JwtAuthGuard)
    // @Get()
    // Signin(@Request() req):string{
    //     return req.user
    // }
}