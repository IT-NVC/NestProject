import { ApiProperty } from '@nestjs/swagger';


export class UpdateProductDto 
{
    @ApiProperty()
    id_Product: number
  
    @ApiProperty()
    id_Category: string

    @ApiProperty()
    NameProduct:string

    @ApiProperty()
    quantity: number
    
    @ApiProperty()
    quantitySold: number

    @ApiProperty()
    price: string
}
