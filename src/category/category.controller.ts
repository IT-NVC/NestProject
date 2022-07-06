import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Category } from 'src/entity/Category.entity';
import { CategoryService } from './category.service';
import { createcategory } from './dto/create-category.dto';

@Controller('nestProject/category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    findAll(){
        return this.categoryService.findAll();
    }

    @Post()
    Create(@Body() createcategory:createcategory){
        return this.categoryService.create(createcategory);
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoryService.remove(+id);
      }

}
