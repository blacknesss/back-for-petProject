import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'get';
  }
  postHello(): string {
    return 'post';
  }
  putHello(): string {
    return 'put';
  }
}
