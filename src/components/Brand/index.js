import './Brand.css';

export default function Brand(props) {
  const bgColor = { backgroundColor: props.secondColor };
  const borderColor = { borderColor: props.firstColor };

  return (
    <section className="brand" style={bgColor}>
      <h3 style={borderColor}>{props.name}</h3>
    </section>
  );
}
