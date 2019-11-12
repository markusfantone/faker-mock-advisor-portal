import { Injectable } from '@nestjs/common';

@Injectable()
export class CrossSellingVidaService {
  get(): any {
    return {
      dados: {
        url: null,
        contratadas: 0,
        ofertadas: 0,
        calculadas: 0,
        dataComparacao: null,
        dataCorrente: null,
      },
    };
  }
}
