import { ApiProperty, ApiResponse } from "@nestjs/swagger";


export class CreateCartDto {
    @ApiProperty()
    id_Cart: number 


    @ApiProperty()
    id_User:string

    @ApiProperty()
    id_Product: number

    @ApiProperty()
    idUserIdUser: string

    @ApiProperty()
    idProductIdProduct: number
}
