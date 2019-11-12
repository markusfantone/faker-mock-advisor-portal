import { Controller, Get } from '@nestjs/common';
import { BuscarService } from '../services/buscar.service';

@Controller('buscar')
export class BuscarController {
  constructor(private readonly buscarService: BuscarService) {}

  @Get()
  get(): any {
    return this.buscarService.get();
  }
}
