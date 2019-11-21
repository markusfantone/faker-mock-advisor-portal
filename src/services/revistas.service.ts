import { Injectable } from '@nestjs/common';

@Injectable()
export class RevistasService {
  get(): any {
    return {
      dados: [
        {
          nome: 'Revista nosso corretor 17',
          link:
            'https://www.tokiomarine.com.br/wp-content/uploads/2019/04/Revista-Nosso-Corretor-ed-17.pdf',
          ordemLancamento: 1,
        },
        {
          nome: 'Revista nosso corretor 2',
          link:
            'https://portalparceiros-aceitew.tokiomarine.com.br/CotadorAutoService/images/banner-natal-2018-full-1.jpg',
          ordemLancamento: 2,
        },
        {
          nome: 'Revista nosso corretor 3',
          link:
            'https://portalparceiros-aceitew.tokiomarine.com.br/CotadorAutoService/images/banner-natal-2018-full-1.jpg',
          ordemLancamento: 3,
        },
      ],
    };
  }
}
