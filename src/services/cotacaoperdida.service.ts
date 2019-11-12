import { Injectable } from '@nestjs/common';

@Injectable()
export class CotacaoPerdidaService {
  get(): any {
    return {
      dados: {
        valorComissao: null,
        url: null,
        situacaoTokio: null,
        bloqueadoTokio: null,
        exibirDash: true,
        cotacaoPerdida: null,
        cotacaoConvertida: null,
        mesCorrente: null,
        mesComparacao: null,
        urlSaibaMais: null,
      },
    };
  }
}
