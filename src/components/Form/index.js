import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import FullInput from '../FullInput';
import './Form.css';

export default function Form() {
  const brands = [
    'Aston Martin',
    'Audi',
    'BMW',
    'CAOA Chery',
    'Chevrolet',
    'Citroën',
    'Ferrari',
    'Fiat',
    'Ford',
    'Honda',
    'Hyundai',
    'Jaguar',
    'Jeep',
    'Kia',
    'Lamborghini',
    'Land Rover',
    'Lexus',
    'Maserati',
    'McLaren',
    'Mercedes-AMG',
    'Mercedes-Benz',
    'Mini',
    'Mitsubishi',
    ' Nissan',
    'Peugeot',
    'Porsche',
    'RAM',
    'Renault',
    'Rolls-Royce',
    'Subaru',
    'Suzuki',
    'Toyota',
    'Volkswagen',
    'Volvo',
  ];

  const toSave = evt => {
    evt.preventDefault();

    console.log('Form foi submetido', brand);
  };

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [releaseData, setRealeaseDae] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <section className="form">
      <form onSubmit={toSave}>
        <h2>Preencha os dados para criar o card do carro</h2>
        <DropdownList required={true} label="Marca" itens={brands} value={brand} changed={value => setBrand(value)} />
        <FullInput
          required={true}
          label="Modelo"
          placeholder="Digite o modelo do carro"
          value={model}
          changed={value => setModel(value)}
        />
        <FullInput
          required={true}
          label="Ano do veículo"
          placeholder="Informe o ano de lançamento do veículo"
          value={releaseData}
          changed={value => setRealeaseDae(value)}
        />
        <FullInput
          required={true}
          label="Foto do veículo"
          placeholder="Informe o endereço da imagem (url)"
          value={imageUrl}
          changed={value => setImageUrl(value)}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
