import { Controller, Get } from '@nestjs/common';
import { FavoritoService } from '../services/favorito.service';

@Controller('buscar')
export class FavoritoController {
  constructor(private readonly favoritoService: FavoritoService) {}

  @Get()
  get(): any {
    return this.favoritoService.get();
  }
}
