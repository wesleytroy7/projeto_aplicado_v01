import React from 'react';
import { useState } from 'react';
import './styles/main.css';
import Header from './componets/Header';
import Main from './componets/Main';
import TextInput from './componets/TextInput';
import getNewId from './services/idServices';
import Button from './componets/Button';
export default function App() {
  //useState pesagem inputText
  const [weight, setWeight] = useState('00.00');

  function handleWeightChange(newWeight) {
    setWeight(newWeight);
  }

  return (
    <>
      <Header>UTI</Header>
      <Main>
        <form className="flex flex-wrap p-4">
          <TextInput
            id={getNewId()}
            labelDescription="PESO ROUPA LEVE:"
            typeInput="number"
            inputPlaceHolder="00.00"
            inputValue={weight}
            onInputChange={handleWeightChange} //quando trocar o texto
            autoFocus
          />
          <Button>Incluir</Button>
        </form>
      </Main>

      <p className="mt-4 text-xl text-gray-500">{weight}</p>
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <th className="px-6 py-3 text-center text-4xl font-bold text-gray-900 uppercase border-2 border-gray-600">
            PESO/Kg
          </th>
        </thead>
        <tbody className="px-6 py-3 text-center text-4xl font-bold text-gray-900 uppercase tracking-wider whitespace-nowrap border-4">
          <tr className="border-2">
            <td>12.20</td>
          </tr>
          <tr className="border-2">
            <td>10.0</td>
          </tr>
          <tr className="border-2">
            <td>9.30</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
