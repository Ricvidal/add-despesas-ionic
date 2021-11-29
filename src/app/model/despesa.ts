export enum TipoDespesa {
    ALIMENTACAO = 'Alimentação',
    EDUCACAO = 'Educação',
    ESPORTE = 'Esporte',
    LAR = 'Lar',
    LAZER = 'Lazer',
    MERCADO = 'Mercado',
    SAUDE = 'Saúde',
    TRANSPORTE = 'Transporte',
    OUTRA = 'Outra',
  }
  
  export class Despesa {
    motivo: string;
    valor: number;
    tipo: TipoDespesa;
    data: string; //ISOString para data
  
    constructor(mot: string, val: number, tp: TipoDespesa, data: string) {
      this.motivo = mot;
      this.valor = val;
      this.tipo = tp;
      this.data = data;
    }
  }
  