import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule, 
    AdminModule,
    MongooseModule.forRoot('mongodb://localhost/demo')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
