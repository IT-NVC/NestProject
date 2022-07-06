import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { Response,Request, query } from 'express';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Dir } from 'fs';

@Controller('nestProject/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() createCartDto: CreateCartDto,@Res() res:Response) {
    await this.cartService.create(createCartDto);
    res.send('<script>alert("Da them vao gio hang!")</script>')
  }

  @Get()
  async findOneUser(@Res() res:Response,@Query() query,@Req() req:Request) {
    if(query.id)
    {
      let cart = await this.cartService.findOneUser(query.id);
      res.render('Cart/ShowCartUser',cart)
    }
    else
    {
      var ip = require("ip");
      let cart = await this.cartService.findIp(ip.address());
      cart = JSON.parse(JSON.stringify(cart))
      res.render('Cart/ShowCartUser',{cart})
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
