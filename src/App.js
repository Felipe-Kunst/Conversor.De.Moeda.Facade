import React, { useState } from 'react';
import ConversorDeMoedaFacade from './Facade/ConversordeMoedasFacade';
import './App.css';

const App = () => {
  const [valorBrl, setValorBrl] = useState('');
  const [valorUsd, setValorUsd] = useState(null);
  const [erro, setErro] = useState(null);

  const conversor = new ConversorDeMoedaFacade();

  const Converter = async () => {
    try {
      const resultado = await conversor.converterBrlParaUsd(parseFloat(valorBrl));
      setValorUsd(resultado);
      setErro(null);
    } catch (e) {
      setErro(e.message);
      setValorUsd(null);
    }
  };

  return (
    <div className="App">
      <h1>Conversor de Moeda</h1>
      {}
      <input
        type="number"
        value={valorBrl}
        onChange={(e) => setValorBrl(e.target.value)}
        placeholder="Digite o valor em BRL"
      />
      <button onClick={Converter}>Converter para USD</button>
      {valorUsd !== null && (
        <p>{valorBrl} Reais é equivalente a {valorUsd.toFixed(2)} Dolares.</p>
      )}
      {erro && <p className="error">Erro: {erro}</p>}
    </div>
  );
};

export default App;