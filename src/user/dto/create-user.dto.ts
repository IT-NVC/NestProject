import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty()
    Name: string

    @ApiProperty()
    Address: string

    @ApiProperty()
    Phone: string

    @ApiProperty()
    username: string

    @ApiProperty()
    password: string

    @ApiProperty()
    usernameIdUsername: number
}
