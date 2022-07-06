import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/entity/cart.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';


@Injectable()
export class CartService {

  constructor(@InjectRepository(Cart)
    private readonly cartRepository:Repository<Cart>
  ){}

  async create(createCartDto: CreateCartDto):Promise<Cart> {
    
    let check  = await this.cartRepository.findOne({where : {id_User: createCartDto.id_User, id_Product:createCartDto.id_Product}})
    let check1  = await this.cartRepository.findOne({where : {addressIp: createCartDto.addressIp, id_Product:createCartDto.id_Product}})
    if(check && check1){
        throw{
          "statusCode": 500,
          "message": "Internal server error"
        }
    }
    else
    {
      var ip = require("ip");
      if(createCartDto.id_User)
      {
        createCartDto.idUserIdUser = createCartDto.id_User
        createCartDto.addressIp = null
      }
      else
      {
        createCartDto.id_User = null
        createCartDto.addressIp = ip.address()
      }
      createCartDto.idProductIdProduct = createCartDto.id_Product
      return await this.cartRepository.save(createCartDto)
    }
  }

  async findOneUser(id: number):Promise<Cart[]> {
    
    let findUserCart = await this.cartRepository.query(`select id_User, product.id_Product, NameProduct, price,LinkImg,id_Cart
    from cart, product
    where cart.id_Product = product.id_Product and cart.id_User = "`+id+`"`)
      
    return findUserCart
  }

  async remove(id: number) {
    return await this.cartRepository.delete({id_Cart: id}) 
  }


  async findIp(id: string):Promise<Cart[]> {
    
    let findUserCart = await this.cartRepository.query(`select addressIp, product.id_Product, NameProduct, price,LinkImg,quantity,id_Cart
    from cart, product
    where cart.id_Product = product.id_Product and cart.addressIp = "`+id+`"`)
      
    return findUserCart
  }
}

