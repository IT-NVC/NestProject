import { Controller, Module } from '@nestjs/common';
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
import { AuthService } from './Auth/auth.service';
import { AppController } from './app.controller';
import { AuthModule } from './Auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './Auth/jwt-auth.guard';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CartModule } from './cart/cart.module';
import { Cart } from './entity/cart.entity';
import { join } from 'path';


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
        SubOrder,
        Cart
      ],
      synchronize: true,
    }), 
    AccountModule, 
    ProductModule, 
    OrderModule, 
    UserModule,
    AuthModule,
    CategoryModule,
    CartModule],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
