import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(){
    return this.todoService.findAll();
  }

  @Post()
  sendData(@Body() dto:CreateTodoDto){
    return this.todoService.create(dto);
  }
}
