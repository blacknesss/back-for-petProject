import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma:PrismaService){}

  findAll() {
    return this.prisma.todo.findMany()
  }

  create(dto: CreateTodoDto){
    return this.prisma.todo.create({
      data: dto,
    })
  }
}