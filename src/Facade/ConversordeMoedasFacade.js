import ServicoDeTaxaDeCambio from '../Service/ServicoDeTaxaDeCambio';

class ConversorDeMoedaFacade {
  constructor() {
    this.servicoDeTaxaDeCambio = new ServicoDeTaxaDeCambio();
  }

  async converterBrlParaUsd(valorBrl) {
    const taxa = await this.servicoDeTaxaDeCambio.obterTaxaDeCambio();
    return valorBrl * taxa;
  }
}

export default ConversorDeMoedaFacade;