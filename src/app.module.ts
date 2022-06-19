import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Account } from './entity/account.entity';
import { Category } from './entity/Category.entity';
import { Orders } from './entity/order.entity';
import { Product } from './entity/product.entity';
import { SubOrder } from './entity/suborder.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestproject',
      entities: [
        User,
        Account,
        Category,
        Orders,
        Product,
        SubOrder
      ],
      synchronize: true,
    }), 
    AccountModule, 
    ProductModule, 
    OrderModule, 
    UserModule]
})
export class AppModule {}
