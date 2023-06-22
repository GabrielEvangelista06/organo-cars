import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import FullInput from '../FullInput';
import './Form.css';

export default function Form(props) {
  const toSave = evt => {
    evt.preventDefault();

    props.registeredVehicle({
      brand,
      model,
      releaseDate,
      imageUrl,
    });

    setBrand('');
    setModel('');
    setRealeaseDate('');
    setImageUrl('');
  };

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [releaseDate, setRealeaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <section className="form">
      <form onSubmit={toSave}>
        <h2>Preencha os dados para criar o card do carro</h2>
        <DropdownList required={true} label="Marca" itens={props.brandName} value={brand} changed={value => setBrand(value)} />
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
          value={releaseDate}
          changed={value => setRealeaseDate(value)}
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
