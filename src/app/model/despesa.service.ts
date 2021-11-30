import { Injectable } from '@angular/core';
import { Despesa } from './despesa';

@Injectable({
  providedIn: 'root',
})
export class DespesaService {
  private despesas: Despesa[];
  constructor() {
    this.despesas = [];
  }

  /** Adiciona uma nova despesa.
   *  @return true: despesa adicionada
   *  @return false: despesa não adicionada
   */
  adicionarNova(desp: Despesa): boolean {
    if (desp != null && !this.despesas.includes(desp)) {
      this.despesas.push(desp);
      console.log(this.despesas);
      return true;
    }
    return false;
  }

  obterTodas(): Despesa[] {
    // console.log(this.despesas);
    return this.despesas;
  }
}
