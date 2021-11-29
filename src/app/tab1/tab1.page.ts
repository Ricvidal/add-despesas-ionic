import { Component } from '@angular/core';
import { Despesa, TipoDespesa } from '../model/despesa';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  tipo: string[];
  despesa: Despesa;

  constructor() {
    this.tipo = Object.values(TipoDespesa);
    this.despesa = new Despesa(
      '',
      null,
      TipoDespesa.OUTRA,
      new Date().toISOString()
    );
  }

  adicionar() {
    console.log(this.despesa);
  }

  limpar() {
    this.despesa.motivo = '';
    this.despesa.valor = null;
    this.despesa.tipo = TipoDespesa.OUTRA;
    this.despesa.data = new Date().toISOString();
  }
}