import { ApiProperty, ApiResponse } from "@nestjs/swagger";


export class CreateCartDto {
    @ApiProperty()
    id_Cart: number 


    @ApiProperty()
    id_User:number

    @ApiProperty()
    id_Product: number

    @ApiProperty()
    addressIp: string


    @ApiProperty()
    idUserIdUser: number

    @ApiProperty()
    idProductIdProduct: number
}
