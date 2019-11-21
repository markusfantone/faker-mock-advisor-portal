import { Controller, Get } from '@nestjs/common';
import { ProducaoMesService } from '../services/producaomes.service';

@Controller('/liferay/home/ajax/producaomes')
export class ProducaoMesController {
  constructor(private readonly producaoMesService: ProducaoMesService) {}

  @Get()
  get(): any {
    return this.producaoMesService.get();
  }
}
