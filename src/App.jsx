import React, { useState } from 'react';
import './App.scss';

export default function App() {
  const [numero, setNumero] = useState('');

  const handleClick = (value) => {
    setNumero((prevNumero) => prevNumero + value);
  };
  //prevNumero = representa valor anterior, antes de uma atualização

  const handleBack = () => {
    setNumero((prevNumero) => prevNumero.slice(0, -1));
  };  

  const handleClear = () => {
    setNumero('');
  };

  const handleCalculate = () => {
    try {
      setNumero(eval(numero).toString());
    } catch (error) {
      setNumero('Erro');
    }
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <p className='visor'>{numero}</p>
      <table className='tabela'>
        <tbody>
          <tr>
            <td><button className='btn' onClick={handleClear}>C</button></td>
            <td><button className='btn' onClick={handleBack}>&lt;</button></td>
            <td><button className='btn' onClick={() => handleClick('/')}>/</button></td>
            <td><button className='btn' onClick={() => handleClick('*')}>*</button></td>
          </tr>
          <tr>
            <td><button className='btn' onClick={() => handleClick('7')}>7</button></td>
            <td><button className='btn' onClick={() => handleClick('8')}>8</button></td>
            <td><button className='btn' onClick={() => handleClick('9')}>9</button></td>
            <td><button className='btn' onClick={() => handleClick('-')}>-</button></td>
          </tr>
          <tr>
            <td><button className='btn' onClick={() => handleClick('4')}>4</button></td>
            <td><button className='btn' onClick={() => handleClick('5')}>5</button></td>
            <td><button className='btn' onClick={() => handleClick('6')}>6</button></td>
            <td><button className='btn' onClick={() => handleClick('+')}>+</button></td>
          </tr>
          <tr>
            <td><button className='btn' onClick={() => handleClick('1')}>1</button></td>
            <td><button className='btn' onClick={() => handleClick('2')}>2</button></td>
            <td><button className='btn' onClick={() => handleClick('3')}>3</button></td>
            <td rowSpan={2}><button className='btn-alto' onClick={handleCalculate}>=</button></td>
          </tr>
          <tr>
            <td colSpan={2}><button className='btn-largo' onClick={() => handleClick('0')}>0</button></td>
            <td><button className='btn' onClick={() => handleClick('.')}>.</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
