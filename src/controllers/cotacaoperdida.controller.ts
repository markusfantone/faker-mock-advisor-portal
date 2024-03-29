import { Controller, Get } from '@nestjs/common';
import { CotacaoPerdidaService } from '../services/cotacaoperdida.service';

@Controller('liferay/home/cadastro/email/cotacaoperdida')
export class CotacaoPerdidaController {
  constructor(private readonly cotacaoPerdidaService: CotacaoPerdidaService) {}

  @Get()
  get(): any {
    return this.cotacaoPerdidaService.get();
  }
}
