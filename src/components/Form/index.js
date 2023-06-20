import Button from '../Button';
import DropdownList from '../DropdownList';
import FullInput from '../FullInput';
import './Form.css';

export default function Form() {
  const brands = ['Aston Martin', 'Audi', 'BMW', 'CAOA Chery', 'Chevrolet', 'Citroën', 'Ferrari', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Maserati', 'McLaren', 'Mercedes-AMG', 'Mercedes-Benz', 'Mini', 'Mitsubishi', ' Nissan', 'Peugeot', 'Porsche', 'RAM', 'Renault', 'Rolls-Royce', 'Subaru', 'Suzuki', 'Toyota', 'Volkswagen', 'Volvo'];

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do carro</h2>
        <DropdownList label="Marca" itens={brands} />
        <FullInput label="Modelo" placeholder="Digite o modelo do carro" />
        <FullInput label="Ano do veículo" placeholder="Informe o ano de lançamento do veículo" />
        <FullInput label="Foto do veículo" placeholder="Informe o endereço da imagem (url)" />

        <Button>Criar card</Button>
      </form>
    </section>
  );
}
