import hexToRgba from 'hex-to-rgba';
import Car from '../Car';
import './Brand.css';

export default function Brand({ brand, cars, onDelete, changeColor }) {
  const bgColor = { backgroundColor: hexToRgba(brand.color, '0.6') };

  return (
    cars.length > 0 && (
      <section className="brand" style={bgColor}>
        <input
          value={brand.color}
          type="color"
          className="color-input"
          onChange={evt => changeColor(evt.target.value, brand.id)}
        />
        <h3 style={{ borderColor: brand.color }}>{brand.name}</h3>
        <div className="cars">
          {cars.map((car, index) => (
            <Car key={index} car={car} backgroundColor={brand.color} onDelete={onDelete} />
          ))}
        </div>
      </section>
    )
  );
}
