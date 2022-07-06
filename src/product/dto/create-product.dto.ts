import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty()
    id_Product: number
  
    @ApiProperty()
    id_Category: number

    @ApiProperty()
    NameProduct:string

    @ApiProperty()
    quantity: number

    @ApiProperty()
    price: string

    @ApiProperty()
    idCategoryIdCategory:number

    @ApiProperty()
    LinkImg: string

    @ApiProperty()
    createDate: string
}

