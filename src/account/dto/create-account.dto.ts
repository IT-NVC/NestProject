import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/Role/role.num";

export class CreateAccountDto {
    @ApiProperty()
    username: string;
    
    @ApiProperty()
    password: string;
  
    @ApiProperty({default: Role.User})
    role: Role
}
