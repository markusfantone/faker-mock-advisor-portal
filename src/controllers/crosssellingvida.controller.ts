import { Controller, Get } from '@nestjs/common';
import { CrossSellingVidaService } from '../services/crosssellingvida.service';

@Controller('buscar')
export class CrossSellingVidaController {
  constructor(
    private readonly crossSellingVidaService: CrossSellingVidaService,
  ) {}

  @Get()
  get(): any {
    return this.crossSellingVidaService.get();
  }
}
