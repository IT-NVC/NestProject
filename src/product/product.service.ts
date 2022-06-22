import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { json } from 'stream/consumers';
import { Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    createProductDto.idCategoryIdCategory = createProductDto.id_Category
    return await this.productsRepository.save(createProductDto)
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findOne({where: {id_Product: id}})
  }

  async update(id: number, updateProductDto: UpdateProductDto) :Promise<Product> {
    let id_Product = id
     await this.productsRepository.update({id_Product},updateProductDto);
     return await this.productsRepository.findOne({where: {id_Product: id_Product}})
  }

  async remove(id: number) {
    let id_Product = id
    await this.productsRepository.delete({id_Product});
    return { deleted: true };
  }
}
