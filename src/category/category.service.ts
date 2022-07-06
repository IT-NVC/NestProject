import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { async } from 'rxjs';
import { Category } from 'src/entity/Category.entity';
import { Repository, TreeRepository } from 'typeorm';
import { createcategory } from './dto/create-category.dto';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository:Repository<Category>
    ){}

    async findAll():Promise<any>{
        return await this.categoryRepository.find()
    }

    async create(newCategory:createcategory):Promise<Category>{
        try {
            var sql= 'INSERT INTO `nestproject`.`category` (`id_Category`, `NameCategory`) VALUES ("'+newCategory.id_Category+'", "'+newCategory.NameCategory+'");'
            return await this.categoryRepository.query(sql);
        } catch (error) {
            throw error
        }
    }


    async remove(id: number) {
        return await this.categoryRepository.delete({id_Category: id})
    }
}
