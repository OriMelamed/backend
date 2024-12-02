import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ori-todo:ori123456@databasenode.xufst.mongodb.net/?retryWrites=true&w=majority&appName=databasenode'),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
