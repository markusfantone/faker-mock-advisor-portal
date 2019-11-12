import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritoService {
  get(): any {
    return {
      url: [],
      favorito: [],
    };
  }
}
