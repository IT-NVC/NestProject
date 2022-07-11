import { ApiProperty } from "@nestjs/swagger";


export class CreateOrderDto {

    @ApiProperty()
    id_Order: String

    @ApiProperty()
    id_User: number

    @ApiProperty()
    id_Product: number

    @ApiProperty()
    DateOrder: String

    @ApiProperty()
    amount: number

    @ApiProperty()
    totalMoney: number

    @ApiProperty()
    Name: string

    @ApiProperty()
    Address: string

    @ApiProperty()
    Phone: string

    @ApiProperty({default: false})
    statusOrder: boolean

    @ApiProperty({default: false})
    statusPayment: boolean
}

