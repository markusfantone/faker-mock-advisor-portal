import { Injectable } from '@nestjs/common';

@Injectable()
export class ProducaoMesService {
  get(): any {
    return {
      anoReferenciaAnterior: 0,
      mesReferenciaAnterior: 0,
      valorPremioLiquidoAnterior: 0.0,
      anoReferenciaAtual: 0,
      mesReferenciaAtual: 0,
      valorPremioLiquidoAtual: 0.0,
      ultimaAtualizacao: new Date(),
      mesReferenciaAnteriorTexto: '',
    };
  }
}
