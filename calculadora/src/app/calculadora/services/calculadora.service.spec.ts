import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('garantir que 10 + 42 = 52',
    inject([CalculadoraService], (service: CalculadoraService) => {
      const soma = service.calcular(10, 42, CalculadoraService.SOMA);
      expect(soma).toEqual(52);
    })
  )

  it('garantir que 14 - 24 = -10',
    inject([CalculadoraService], (service: CalculadoraService) => {
      const subtracao = service.calcular(14, 24, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-10);
    })
  )

  it('garantir que 8 * 4 = 32',
    inject([CalculadoraService], (service: CalculadoraService) => {
      const multplicacao = service.calcular(8, 4, CalculadoraService.MULTIPLICACAO);
      expect(multplicacao).toEqual(32);
    })
  )
});
