import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class User {
    @Prop()
    name: string;

    @Prop()
    username: string;

    @Prop()
    friends: string
}

export const UserSchema = SchemaFactory.createForClass(User);
