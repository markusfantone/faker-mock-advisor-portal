import { Controller, Get } from '@nestjs/common';
import { RevistasService } from '../services/revistas.service';

@Controller('liferay/home/ajax/revista')
export class RevistasController {
  constructor(private readonly revistasService: RevistasService) {}

  @Get()
  get(): any {
    return this.revistasService.get();
  }
}
