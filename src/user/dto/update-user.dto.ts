import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty()
    Name: string

    @ApiProperty()
    Address: string

    @ApiProperty()
    Phone: string
}
