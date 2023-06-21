import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  const [vehicles, setVehicles] = useState([]);

  const newVehicle = vehicle => {
    setVehicles([...vehicles, vehicle]);
  };

  return (
    <div className="App">
      <Banner />
      <Form registeredVehicle={vehicle => newVehicle(vehicle)} />
    </div>
  );
}

export default App;
