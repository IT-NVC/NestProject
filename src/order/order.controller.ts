import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { createRequire } from 'module';
import { ProductService } from 'src/product/product.service';


@Controller('nestProject/order')
export class OrderController {
  constructor(private readonly orderService: OrderService,
              private readonly productService:ProductService
    ) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {

    //update quantity
    let product = await this.productService.findOne(createOrderDto.id_Product)
    product.quantity = product.quantity - createOrderDto.amount
    product.quantitySold = product.quantitySold + createOrderDto.amount
    await this.productService.update(product.id_Product, product)


    //totalMoney
    let price = Number(product.price)
    createOrderDto.totalMoney = createOrderDto.amount*price

    //add order
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll(); 
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.orderService.findOneUser(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.orderService.update(+id, updateOrderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.orderService.remove(+id);
  // }
}

