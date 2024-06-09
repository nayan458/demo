import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetailDto } from './dto/userDetail.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}
    
    
    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() userDetailDto: UserDetailDto) {
        return this.userService.registerUser(userDetailDto);
    }

    @Get('')
    user() {
        return this.userService.getName();
    }

    @Get('/name')
    username() {
        return this.userService.getUsername();
    }
    @Get('/friends')
    friend() {
        return this.userService.getFriend();
    }

}
