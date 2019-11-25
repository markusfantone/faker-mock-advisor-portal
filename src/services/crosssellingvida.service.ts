import { Injectable } from '@nestjs/common';

@Injectable()
export class CrossSellingVidaService {
  get(): any {
    return {
      dados: {
        url:
          'https://portalparceiros.tokiomarine.com.br/aff/ctv/portal/cross-selling/oferta-vida-individual?TIPOSITE=CORRETOR',
        calculadas: 0,
        contratadas: 0,
        ofertadas: 17,
        dataComparacao: '22/10/2019',
        dataCorrente: '21/11/2019',
      },
    };
  }
}
