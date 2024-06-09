import { Injectable } from '@nestjs/common';
import { UserDetailDto } from './dto/userDetail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/User.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ){}


    registerUser(userDetailDto: UserDetailDto){
        const newUser = new this.userModel(userDetailDto);
        return newUser
    }

    getFriend(): object{
        return ({
            1: "Nayan",
            2: "Piyush"
        });
    }
    getName(): object{
        return ({
            "username": "Kumar Aniket",
        })
    }
    getUsername(): object{
        return ({
            "username": "Aniket123",
        })
    }
}
