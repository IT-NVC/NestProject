import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Category } from 'src/entity/Category.entity';
import { CategoryService } from './category.service';
import { createcategory } from './dto/create-category.dto';
import { updatecategory } from './dto/update-category.dto';

@Controller('nestProject/category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    findAll(){
        return this.categoryService.findAll();
    }

    @Post()
    async Create(@Body() createcategory:createcategory){
        return await this.categoryService.create(createcategory);
    }

    @Patch(':id')
    async Update(@Param('id') id: number ,@Body() updatecategory: updatecategory){
        return await this.categoryService.update(id, updatecategory)
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoryService.remove(+id);
      }

}
