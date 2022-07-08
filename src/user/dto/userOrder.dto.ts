import { ApiProperty } from "@nestjs/swagger"

export class CreateUserOrderDto {
    @ApiProperty()
    Name: string

    @ApiProperty()
    Address: string

    @ApiProperty()
    Phone: string
}
