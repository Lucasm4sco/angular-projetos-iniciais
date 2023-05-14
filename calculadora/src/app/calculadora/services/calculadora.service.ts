import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  public calcular(num1: number, num2: number, operacao: string): number {
    switch(operacao){
      case CalculadoraService.SOMA:
        return num1 + num2;
      case CalculadoraService.SUBTRACAO:
        return num1 - num2;
      case CalculadoraService.MULTIPLICACAO:
        return num1 * num2;
      default:
        return 0;
    }
  }
}
