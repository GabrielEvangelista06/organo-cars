import './FullInput.css';

export default function FullInput(props) {
  return (
    <div className="full-input">
      <label>{props.label}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}
