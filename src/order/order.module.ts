import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from 'src/entity/order.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Orders]),ProductModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
