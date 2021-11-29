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
  export enum TipoRegime {
    CAIXA = 'Caixa',
    COMPETENCIA = 'Competência',
    ESCOLHER = 'Outro',
  }
  
  export class Despesa {
    motivo: string;
    valor: number;
    tipo: TipoDespesa;
    regime: TipoRegime; 
    data: string; //ISOString para data
  
    constructor(mot: string, val: number, tp: TipoDespesa, reg: TipoRegime, data: string) {
      this.motivo = mot;
      this.valor = val;
      this.tipo = tp;
      this.regime = reg;
      this.data = data;
    }
  }
  