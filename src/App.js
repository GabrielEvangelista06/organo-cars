import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Brand from './components/Brand';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  const [brands, setBrands] = useState([
    { id: uuidv4(), name: 'Aston Martin', color: '#2a6e78' },
    { id: uuidv4(), name: 'BMW', color: '#027fe9' },
    { id: uuidv4(), name: 'CAOA Chery', color: '#ff2121' },
    { id: uuidv4(), name: 'Chevrolet', color: '#e8e490' },
    { id: uuidv4(), name: 'Ferrari', color: '#ff0000' },
    { id: uuidv4(), name: 'Fiat', color: '#ba1e4a' },
    { id: uuidv4(), name: 'Ford', color: '#1b66ff' },
    { id: uuidv4(), name: 'Honda', color: '#a8a7a7' },
    { id: uuidv4(), name: 'Hyundai', color: '#027fe9' },
    { id: uuidv4(), name: 'Jaguar', color: '#a1a1a1' },
    { id: uuidv4(), name: 'Jeep', color: '#000000' },
    { id: uuidv4(), name: 'Lamborghini', color: '#222222' },
    { id: uuidv4(), name: 'Land Rover', color: '#408156' },
    { id: uuidv4(), name: 'Maserati', color: '#363636' },
    { id: uuidv4(), name: 'McLaren', color: '#474747' },
    { id: uuidv4(), name: 'Mercedes-Benz', color: '#ff2121' },
    { id: uuidv4(), name: 'Mitsubishi', color: '#000000' },
    { id: uuidv4(), name: 'Nissan', color: '#ff2121' },
    { id: uuidv4(), name: 'Porsche', color: '#0d0c0c' },
    { id: uuidv4(), name: 'RAM', color: '#000000' },
    { id: uuidv4(), name: 'Rolls-Royce', color: '#ab9597' },
    { id: uuidv4(), name: 'Toyota', color: '#363636' },
    { id: uuidv4(), name: 'Volkswagen', color: '#013750' },
    { id: uuidv4(), name: 'Volvo', color: '#0d0d0d' },
  ]);

  const initial = [
    {
      id: uuidv4(),
      model: 'Aston Martin DB12',
      releaseDate: '2023',
      imageUrl: 'https://www.automaistv.com.br/wp-content/uploads/2023/05/aston_martin_db12_12_edited-990x594.jpg',
      brand: brands[0].name,
    },
  ];

  const [cars, setCars] = useState(initial);

  const newCar = car => {
    setCars([...cars, car]);
  };

  function deleteCar(id) {
    setCars(cars.filter(car => car.id !== id));
  }

  function changeBrandColor(color, id) {
    setBrands(
      brands.map(brand => {
        if (brand.id === id) {
          brand.color = color;
        }
        return brand;
      }),
    );
  }

  function registerBrand(newBrand) {
    setBrands([...brands, { ...newBrand, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Banner />
      <Form
        nameBrand={brands.map(brand => brand.name)}
        registeredVehicle={vehicle => newCar(vehicle)}
        registerBrand={registerBrand}
      />
      {brands.map((brand, index) => (
        <Brand
          brand={brand}
          key={index}
          cars={cars.filter(car => car.brand === brand.name)}
          onDelete={deleteCar}
          changeColor={changeBrandColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
