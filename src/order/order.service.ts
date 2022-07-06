import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Orders } from 'src/entity/order.entity';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';


//method return date now
function dateNow(){
  let today = new Date();
  let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+' '+time;
  return dateTime;
}

//method random id
function id():String {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 20; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
};


@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders)
    private readonly OrdersRepository: Repository<Orders>
  ) {}


  async create(createOrderDto: CreateOrderDto): Promise<Orders>{
    try {
      let idOrder;
      createOrderDto.DateOrder = dateNow();
      
      //check id_Order
      do {
        let idOrder = id();
        createOrderDto.id_Order = idOrder;
      } while (await this.OrdersRepository.findOne({where : {id_Order : idOrder}}));

      //action create
      return await this.OrdersRepository.query(`CALL orders(?,?,?,?,?,?,?)`,
      [ createOrderDto.id_Order,
        createOrderDto.id_User,
        createOrderDto.DateOrder,
        createOrderDto.id_Product,
        createOrderDto.amount,
        createOrderDto.totalMoney,
        createOrderDto.Address
      ]
      )
    } catch (error) {
        throw error;
    }
  }

  async findAll():Promise<Orders[]> {
    try {
      return await this.OrdersRepository.find();
    } catch (error) {
      throw error
    }
  }

  async findOneUser(id: number):Promise<Orders[]> {

    return this.OrdersRepository.query(
      `select id_User, orders.id_Order, amount, totalMoney, product.id_Product, DateOrder, NameProduct
      from orders, product,sub_order
      where orders.id_Order = sub_order.idOrderIdOrder and sub_order.id_Product = product.id_Product and orders.id_User = "`+id+`"`
    )
  }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
