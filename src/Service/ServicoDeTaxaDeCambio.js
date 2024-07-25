import axios from 'axios';

class ServicoDeTaxaDeCambio {
  constructor() {
    this.apiUrl = 'https://economia.awesomeapi.com.br/json/last/BRL-USD';
  }
  async obterTaxaDeCambio() {
    try {
      const response = await axios.get(this.apiUrl);
      if (response.status === 200) {
        return response.data.BRLUSD.bid;
      } else {
        throw new Error('Erro ao buscar a taxa de câmbio');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ServicoDeTaxaDeCambio;