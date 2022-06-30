import { ApiProperty } from '@nestjs/swagger';

export class createcategory {
    @ApiProperty()
    id_Category: string

    @ApiProperty()
    NameCategory:string
}