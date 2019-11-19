import { Controller, Get } from '@nestjs/common';
import { NoticiasService } from '../services/noticias.service';

@Controller('liferay/home/cadastro/email/noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Get()
  get(): any {
    return this.noticiasService.get();
  }
}
