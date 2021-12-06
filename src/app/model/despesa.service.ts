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
    console.log('desp.Motivo: '+desp.motivo, 'desp.valor: '+desp.valor);
    
    let naoDuplicado = this.despesas.filter(d => d.motivo == desp.motivo && d.valor == desp.valor)
    console.log(naoDuplicado);
    if (naoDuplicado.length == 0) {
      this.despesas.push(desp);
      console.log(this.despesas);
      return true;
    }
     return false;
  }
  
  
  // adicionarNova(desp: Despesa): boolean {
  //   if (desp != null && !this.despesas.includes(desp)) {
  //     console.log('Impressão do desp => '+desp)
  //     console.log('Impressão do desp.motivo => '+desp.motivo)
  //     console.log('Impressão do desp.valor => '+desp.valor)
  //     this.despesas.push(desp);

  //     return true;
  //   }
  //     return false;
  // }

  obterTodas(): Despesa[] {
    return this.despesas;
  }
}
