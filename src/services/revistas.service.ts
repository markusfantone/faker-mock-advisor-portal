import { Injectable } from '@nestjs/common';

@Injectable()
export class RevistasService {
  get(): any {
    let arr = new Array<any>();

    for (let index = 0; index < 7; index++) {
      arr.push({
        nome: `Revista nosso corretor 1${index + 1}`,
        link:
          'https://www.tokiomarine.com.br/wp-content/uploads/2019/04/Revista-Nosso-Corretor-ed-17.pdf',
        ordemLancamento: index + 1,
      });
    }
    return {
      dados: arr,
    };
  }
}
