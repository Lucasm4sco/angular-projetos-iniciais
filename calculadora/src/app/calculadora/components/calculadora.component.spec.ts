import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';

import { DebugElement } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

const executarOperacao = (
  fixture: ComponentFixture<AppComponent>,
  btn1: DebugElement, 
  btnOperacao: DebugElement, 
  btn2: DebugElement, 
  btnCalcular: DebugElement, 
  expectedValue: number
) => {
  btn1.triggerEventHandler('click', null);
  fixture.detectChanges();

  btnOperacao.triggerEventHandler('click', null);
  fixture.detectChanges();

  btn2.triggerEventHandler('click', null);
  fixture.detectChanges();

  btnCalcular.triggerEventHandler('click', null);
  fixture.detectChanges();

  const result = fixture.debugElement.query(By.css('.result'));
  expect(result.nativeElement.innerText).toEqual(expectedValue.toString());
}

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      providers: [CalculadoraService]
    });
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('garatir que soma está funcionando', () => {
    const btn3 = fixture.debugElement.query(By.css('#btn-3'));
    const btnSoma = fixture.debugElement.query(By.css('#btn-plus'));
    const btn7 = fixture.debugElement.query(By.css('#btn-7'));
    const btnCalcular = fixture.debugElement.query(By.css('#btn-calculate'));

    executarOperacao(fixture, btn3, btnSoma, btn7, btnCalcular, 10);
  })

  it('garatir que subtração está funcionando', () => {
    const btn2 = fixture.debugElement.query(By.css('#btn-2'));
    const btnSubtract = fixture.debugElement.query(By.css('#btn-subtract'));
    const btn9 = fixture.debugElement.query(By.css('#btn-9'));
    const btnCalcular = fixture.debugElement.query(By.css('#btn-calculate'));

    executarOperacao(fixture, btn2, btnSubtract, btn9, btnCalcular, -7);
  })

  it('garatir que multiplicação está funcionando', () => {
    const btn4 = fixture.debugElement.query(By.css('#btn-4'));
    const btnMultiply = fixture.debugElement.query(By.css('#btn-multiply'));
    const btn5 = fixture.debugElement.query(By.css('#btn-5'));
    const btnCalcular = fixture.debugElement.query(By.css('#btn-calculate'));
    const result = fixture.debugElement.query(By.css('.result'));

    executarOperacao(fixture, btn4, btnMultiply, btn5, btnCalcular, 20);
  })
});
