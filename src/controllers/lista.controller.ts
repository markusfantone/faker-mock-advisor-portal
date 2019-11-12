import { Controller, Get } from '@nestjs/common';
import { ListaService } from '../services/lista.service';

@Controller('buscar')
export class ListaController {
  constructor(private readonly listaService: ListaService) {}

  @Get()
  get(): any {
    return this.listaService.get();
  }
}
