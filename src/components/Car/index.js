import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Car.css';

export default function Car({ car, backgroundColor, onDelete, onFavorite }) {
  function toFavorite() {
    onFavorite(car.id);
  }

  const favoriteProps = {
    size: 25,
    onClick: toFavorite,
  };

  return (
    <div className="car">
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => onDelete(car.id)}
      />
      <div className="header" style={{ backgroundColor }}>
        <img src={car.imageUrl} alt={car.model} />
      </div>
      <div className="footer">
        <h4>{car.model}</h4>
        <h5>{car.brand}</h5>
        <h5>{car.releaseDate}</h5>
        <div className="to-favorite">
          {car.favorite ? (
            <AiFillHeart {...favoriteProps} color={backgroundColor} />
          ) : (
            <AiOutlineHeart {...favoriteProps} />
          )}
        </div>
      </div>
    </div>
  );
}
