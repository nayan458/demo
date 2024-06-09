import { IsNotEmpty, IsString } from "class-validator";

export class UserDetailDto{
    
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    username: string;
}