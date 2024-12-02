import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../schema/Task.schema';
import { CreateTaskDto } from 'src/tasks/dto/CreateTask.dto';
import { UpdateTaskDto } from 'src/tasks/dto/UpdateTask.dto';


@Injectable()
export class TasksService {
constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  createTask(createTaskDto: CreateTaskDto){
    const newTask = new this.taskModel(createTaskDto);
    return newTask.save();
  }

  findAll() {
    return this.taskModel.find()
  }

  findOne(id: string) {
    return this.taskModel.findById(id)
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, {new: true});
  }

  remove(id: string) {
    return this.taskModel.deleteOne({_id: id});
  }
}
