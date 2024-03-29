import { Controller, Get } from '@nestjs/common';
import { GerenteService } from '../services/gerente.service';

@Controller('liferay/home/ajax/gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Get()
  get(): any {
    return this.gerenteService.get();
  }
}
