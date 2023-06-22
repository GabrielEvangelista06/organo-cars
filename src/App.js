import { useState } from 'react';
import Banner from './components/Banner';
import Brand from './components/Brand';
import Form from './components/Form';

function App() {
  const [cars, setCars] = useState([]);

  const brands = [
    { name: 'Aston Martin', firstColor: '#2a6e78', secondColor: '#7a907c' },
    { name: 'BMW', firstColor: '#027fe9', secondColor: '#00caf8' },
    { name: 'CAOA Chery', firstColor: '#ff2121', secondColor: '#a8a7a7' },
    { name: 'Chevrolet', firstColor: '#e8e490', secondColor: '#a1a1a1' },
    { name: 'Ferrari', firstColor: '#ff0000', secondColor: '#ffff00' },
    { name: 'Fiat', firstColor: '#ba1e4a', secondColor: '#a8a7a7' },
    { name: 'Ford', firstColor: '#1b66ff', secondColor: '#00cef5' },
    { name: 'Honda', firstColor: '#a8a7a7', secondColor: '#ff2121' },
    { name: 'Hyundai', firstColor: '#027fe9', secondColor: '#a8a7a7' },
    { name: 'Jaguar', firstColor: '#a1a1a1', secondColor: '#f3c363' },
    { name: 'Jeep', firstColor: '#000000', secondColor: '#a8a7a7' },
    { name: 'Lamborghini', firstColor: '#222222', secondColor: '#f7fd91' },
    { name: 'Land Rover', firstColor: '#408156', secondColor: '#1f5f61' },
    { name: 'Maserati', firstColor: '#363636', secondColor: '#1b66ff' },
    { name: 'McLaren', firstColor: '#474747', secondColor: '#fc913a' },
    { name: 'Mercedes-Benz', firstColor: '#ff2121', secondColor: '#a8a7a7' },
    { name: 'Mitsubishi', firstColor: '#000000', secondColor: '#ff2121' },
    { name: 'Nissan', firstColor: '#ff2121', secondColor: '#363636' },
    { name: 'Porsche', firstColor: '#0d0c0c', secondColor: '#e6ac27' },
    { name: 'RAM', firstColor: '#000000', secondColor: '#252326' },
    { name: 'Rolls-Royce', firstColor: '#ab9597', secondColor: '#ffffff' },
    { name: 'Toyota', firstColor: '#363636', secondColor: '#790614' },
    { name: 'Volkswagen', firstColor: '#013750', secondColor: '#ffffff' },
    { name: 'Volvo', firstColor: '#0d0d0d', secondColor: '#f0f0f0' },
  ];

  const newVehicle = vehicle => {
    setCars([...cars, vehicle]);
  };

  return (
    <div className="App">
      <Banner />
      <Form brandName={brands.map(brand => brand.name)} registeredVehicle={vehicle => newVehicle(vehicle)} />
      {brands.map(brand => (
        <Brand
          key={brand.name}
          name={brand.name}
          firstColor={brand.firstColor}
          secondColor={brand.secondColor}
          cars={cars.filter(car => car.brand === brand.name)}
        />
      ))}
    </div>
  );
}

export default App;
