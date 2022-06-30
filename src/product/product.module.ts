import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { RolesGuard } from 'src/Role/role.guard';
import { APP_GUARD } from '@nestjs/core';
import { Category } from 'src/entity/Category.entity';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]),CategoryModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule {}
