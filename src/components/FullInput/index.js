import './FullInput.css';

export default function FullInput(props) {
  const whenTyping = evt => {
    props.changed(evt.target.value);
  };

  return (
    <div className="full-input">
      <label>{props.label}</label>
      <input value={props.value} onChange={whenTyping} required={props.required} type="text" placeholder={props.placeholder} />
    </div>
  );
}
