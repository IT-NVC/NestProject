import { ApiProperty } from '@nestjs/swagger';

export class createcategory {
    @ApiProperty()
    id_Category: number

    @ApiProperty()
    NameCategory:string
}