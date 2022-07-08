import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { async } from 'rxjs';
import { Category } from 'src/entity/Category.entity';
import { Repository, TreeRepository } from 'typeorm';
import { createcategory } from './dto/create-category.dto';
import { updatecategory } from './dto/update-category.dto';

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
            var sql= 'INSERT INTO `nestproject`.`category` (`NameCategory`) VALUES ("'+newCategory.NameCategory+'");'
            return await this.categoryRepository.query(sql);
        } catch (error) {
            throw error
        }
    }


    async remove(id: number) {
        return await this.categoryRepository.delete({id_Category: id})
    }


    async update(id:number, updatecategory: updatecategory){
        return await this.categoryRepository.update({id_Category: id}, updatecategory)
    }
}
