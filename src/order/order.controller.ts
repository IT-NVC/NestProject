import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Render } from '@nestjs/common';
import { OrderService } from './order.service';
import { Response } from 'express';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { createRequire } from 'module';
import { ProductService } from 'src/product/product.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';


@Controller('nestProject/order')
export class OrderController {
  constructor(private readonly orderService: OrderService,
              private readonly productService:ProductService,
              private readonly userService:UserService
    ) {}

  //create order
  @Post(':id')
  async create(@Res() res: Response,@Body() createOrderDto: CreateOrderDto,@Param('id') id:number) {

    //select data product
    createOrderDto.id_Product = id
    let product = await this.productService.findOne(createOrderDto.id_Product)

    if(product.quantity<createOrderDto.amount)
    {
      throw{
        "statusCode": 400,
        "message": "Internal server error"
      }
    }
    else{
      let user = {
        Name: createOrderDto.Name,
        Phone: createOrderDto.Phone,
        Address: createOrderDto.Address,
      }

      //select data user
      let findUser = await this.userService.findOneOrder({
        Name: createOrderDto.Name,
        Phone: createOrderDto.Phone})

      //if user created
      if(findUser)
      {
        createOrderDto.id_User = (await findUser).id_User
      }
      else
      {

        //create new client
        await this.userService.create(user)
        let findUser = await this.userService.findOneOrder({
          Name: createOrderDto.Name,
          Phone: createOrderDto.Phone})

        //select new user created
        createOrderDto.id_User = (await findUser).id_User
      }


      //fix array
      product = JSON.parse(JSON.stringify(product))
      let productConvert = product[0]
      delete productConvert.idCategoryIdCategory
      delete productConvert.NameCategory


      //update quantity product
      productConvert.quantity = productConvert.quantity - Number(createOrderDto.amount)
      productConvert.quantitySold = productConvert.quantitySold + Number(createOrderDto.amount)
      await this.productService.update(productConvert.id_Product, productConvert)

      
  
  
      //totalMoney
      let price = Number(productConvert.price)
      createOrderDto.totalMoney = createOrderDto.amount*price

  
      //add order
      await this.orderService.create(createOrderDto);

      res.send('<script>alert("?????t h??ng th??nh c??ng!!")</script>')
    }
  }

  @Get()
  async findAll() {
    return await this.orderService.findAll(); 
  }

  @Get(':id')
  findOneUser(@Param('id') id: number) {
    return this.orderService.findOneUser(id);
  }

  @Patch('/payment/:idOrder')
  async updatePayment(@Param('idOrder') idOrder: string, @Body() updateOrderDto: UpdateOrderDto) {
    return await this.orderService.updatePayment(idOrder, updateOrderDto);
  }

  @Patch(':idOrder')
  async update(@Param('idOrder') idOrder: string, @Body() updateOrderDto: UpdateOrderDto) {
    return await this.orderService.update(idOrder, updateOrderDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.orderService.remove(+id);
  // }
}

