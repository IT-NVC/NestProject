import { ApiProperty } from '@nestjs/swagger';


export class UpdateProductDto 
{
    @ApiProperty()
    id_Product: number
  
    @ApiProperty()
    id_Category: String

    @ApiProperty()
    NameProduct:String

    @ApiProperty()
    quantity: number
    
    @ApiProperty()
    quantitySold: number
}
