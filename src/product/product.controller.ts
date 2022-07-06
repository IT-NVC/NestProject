import { Controller, Get, Post, Body, Patch, Param, Delete, Redirect, UseGuards, Res, Render, Query } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CategoryService } from 'src/category/category.service';
import { Product } from 'src/entity/product.entity';
import { get } from 'http';
import { SearchProductDto } from './dto/search-product.dto';


@Controller('nestProject/products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService) {}

  //findOfUser
  @Post('/find')
  async findOfUser(@Res() res: Response,@Body() search: SearchProductDto){
    let product= await this.productService.findOfUser(search.NameProduct);
    product =JSON.parse(JSON.stringify(product))
    res.render('Product/ShowProduct',{product})
  }

  @Get('/seeProduct/:id')
  async seeProduct(@Res() res: Response,@Param('id') id: number){
    let product = await this.productService.findOne(+id);
    product = JSON.parse(JSON.stringify(product))
    let newProduct=product[0]
    res.render('Product/BuyProduct',{newProduct})
  }


  //findOfAdmin
  // @UseGuards(JwtAuthGuard,RolesGuard)
  // @Roles(Role.Admin,Role.User)
  @Get()
  async findAll(@Res() res: Response){
    let product = await this.productService.findAll();
    res.render('Product/ShowProduct',{product})
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }


  //action
  @Post('/create')
  async create(@Res() res: Response,@Body() createProductDto: CreateProductDto) {
    await this.productService.create(createProductDto);
    res.redirect('/nestProject/products/stored/show')
  }


  @Patch('/edit/:id')
  async update(@Res() res: Response,@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    await this.productService.update(+id, updateProductDto);
    res.redirect('/nestProject/products/stored/show')
    
  }

  @Delete('/delete/:id')
  async remove(@Res() res: Response,@Param('id') id: string) {
    await this.productService.remove(+id);
    res.redirect('/nestProject/products/stored/show')
    
  }

  //me
  @Get('/stored/show')
  async managerProduct(@Res() res: Response){
    let product = await this.productService.findAll();
    res.render('Product/me/stored/StoredProduct',{product})
  }

  @Get('me/createProduct')
  async uiCreateProduct(@Res() res: Response) {
    let category = await this.categoryService.findAll();
    res.render('Product/CreateProduct',{category})
  }

  @Get('/edit/:id')
  async uiEditProduct(@Res() res: Response,@Param('id') id: string){
      let product = await this.productService.findOne(+id);
      let category = await this.categoryService.findAll();
      product = JSON.parse(JSON.stringify(product))
      let newProduct=product[0]
      res.render('Product/EditProduct',{newProduct,category})
  }


}

