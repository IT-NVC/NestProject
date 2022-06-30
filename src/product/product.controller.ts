import { Controller, Get, Post, Body, Patch, Param, Delete, Redirect, UseGuards, Res, Render } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from 'src/entity/product.entity';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/Auth/jwt-auth.guard';
import { Roles } from 'src/role/role.decorator';
import { Role } from 'src/Role/role.num';
import { RolesGuard } from 'src/Role/role.guard';
import { CategoryService } from 'src/category/category.service';

@Controller('nestProject/products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(){
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
