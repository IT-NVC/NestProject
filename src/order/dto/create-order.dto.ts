import { ApiProperty } from "@nestjs/swagger";


export class CreateOrderDto {

    @ApiProperty()
    id_Order: String

    @ApiProperty()
    id_User: String

    @ApiProperty()
    id_Product: number

    @ApiProperty()
    DateOrder: String

    @ApiProperty()
    amount: number

    @ApiProperty()
    totalMoney: number
}

