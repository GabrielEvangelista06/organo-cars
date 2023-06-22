import Car from '../Car';
import './Brand.css';

export default function Brand(props) {
  const bgColor = { backgroundColor: props.secondColor };
  const borderColor = { borderColor: props.firstColor };

  return (
    props.cars.length > 0 && (
      <section className="brand" style={bgColor}>
        <h3 style={borderColor}>{props.name}</h3>
        <div className="cars">
          {props.cars.map(car => (
            <Car key={car.model} model={car.model} brand={car.brand} imageUrl={car.imageUrl} releaseDate={car.releaseDate} />
          ))}
        </div>
      </section>
    )
  );
}
