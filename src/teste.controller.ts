import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('teste')
export class TesteController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
