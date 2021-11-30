import { TipoRegime } from './../model/despesa';
import { Component } from '@angular/core';
import { Despesa, TipoDespesa } from '../model/despesa';
import { DespesaService } from '../model/despesa.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  tipo: string[];
  regime: string[];
  despesa: Despesa;

  constructor(private ds: DespesaService) {
    this.tipo = Object.values(TipoDespesa);
    this.regime = Object.values(TipoRegime);
    this.despesa = new Despesa(
      '',
      null,
      TipoDespesa.OUTRA,
      TipoRegime.ESCOLHER,
      new Date().toISOString()
    );
  }

  adicionar() {
    console.log(this.despesa);
    this.ds.adicionarNova(this.despesa);
  }

  limpar() {
    this.despesa.motivo = '';
    this.despesa.valor = null;
    this.despesa.tipo = TipoDespesa.OUTRA;
    this.despesa.regime = TipoRegime.ESCOLHER;
    this.despesa.data = new Date().toISOString();
  }
}