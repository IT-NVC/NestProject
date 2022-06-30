import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { rejects } from 'assert';
import { find, UnsubscriptionError } from 'rxjs';
import { Cart } from 'src/entity/cart.entity';
import { Product } from 'src/entity/product.entity';
import { json } from 'stream/consumers';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {

  constructor(@InjectRepository(Cart)
    private readonly cartRepository:Repository<Cart>
  ){}

  async create(createCartDto: CreateCartDto):Promise<Cart> {
    
    let check  = await this.cartRepository.findOne({where : {id_User: createCartDto.id_User, id_Product:createCartDto.id_Product}})
    if(check){
        throw{
          "statusCode": 500,
          "message": "Internal server error"
        }
    }
    else
    {
      createCartDto.idUserIdUser = createCartDto.id_User
      createCartDto.idProductIdProduct = createCartDto.id_Product
      return await this.cartRepository.save(createCartDto)
    }
  }

  async findAll():Promise<Cart[]> {
      return await this.cartRepository.find()
  }

  async findOneUser(id: string):Promise<Cart[]> {
    
    let findUserCart = await this.cartRepository.query(`select id_User, product.id_Product, NameProduct, price
    from cart, product
    where cart.id_Product = product.id_Product and cart.id_User = "`+id+`"`)
      
    return findUserCart
  }

  async remove(id: number) {
    return await this.cartRepository.delete({id_Cart: id}) 
  }
}

