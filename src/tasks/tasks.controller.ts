import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/tasks/dto/CreateTask.dto';
import mongoose from 'mongoose';
import { UpdateTaskDto } from 'src/tasks/dto/UpdateTask.dto';


@Controller('tasks')
export class TasksController {
  
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Body() CreateTaskDto: CreateTaskDto){
    return this.tasksService.createTask(CreateTaskDto);
  } 

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
   async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid){return 'Invalid task id';}
    const findTask = await this.tasksService.findOne(id);
    if(!findTask){return 'Task not found';}

    return findTask;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) return 'Invalid task id' 

    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
