import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button';
import DropdownList from '../DropdownList';
import Input from '../Input';
import './Form.css';

export default function Form({ nameBrand, registeredVehicle, registerBrand }) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [releaseDate, setRealeaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [brandName, setBrandName] = useState('');
  const [brandColor, setBrandColor] = useState('');

  const toSave = evt => {
    evt.preventDefault();

    registeredVehicle({
      id: uuidv4(),
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

  return (
    <section className="form">
      <form onSubmit={toSave}>
        <h2>Preencha os dados para criar o card do carro</h2>
        <DropdownList required={true} label="Marca" itens={nameBrand} value={brand} changed={value => setBrand(value)} />
        <Input
          required={true}
          label="Modelo"
          placeholder="Digite o modelo do carro"
          value={model}
          changed={value => setModel(value)}
        />
        <Input
          required={true}
          label="Ano do veículo"
          placeholder="Informe o ano de lançamento do veículo"
          value={releaseDate}
          changed={value => setRealeaseDate(value)}
        />
        <Input
          required={true}
          label="Foto do veículo"
          placeholder="Informe o endereço da imagem (url)"
          value={imageUrl}
          changed={value => setImageUrl(value)}
        />

        <Button>Criar Card</Button>
      </form>

      <form
        onSubmit={evt => {
          evt.preventDefault();
          registerBrand({ name: brandName, color: brandColor });
          setBrandName('');
          setBrandColor('');
        }}
      >
        <h2>Preencha os dados para criar uma nova marca</h2>
        <Input
          required
          label="Nome da marca"
          placeholder="Digite o nome da marca"
          value={brandName}
          changed={value => setBrandName(value)}
        />
        <Input
          required
          label="Cor da marca"
          placeholder="Informe a cor do time"
          value={brandColor}
          changed={value => setBrandColor(value)}
          type="color"
        />

        <Button>Criar Nova Marca</Button>
      </form>
    </section>
  );
}
