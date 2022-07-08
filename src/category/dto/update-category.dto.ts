import { ApiProperty } from '@nestjs/swagger';

export class updatecategory {

    @ApiProperty()
    id_Category: number

    @ApiProperty()
    NameCategory:string
}