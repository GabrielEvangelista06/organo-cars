import './Input.css';

export default function Input({ label, value, required, placeholder, changed, type = 'text' }) {
  const whenTyping = evt => {
    changed(evt.target.value);
  };

  return (
    <div className={`input input-${type}`}>
      <label>{label}</label>
      <input value={value} onChange={whenTyping} required={required} type={type} placeholder={placeholder} />
    </div>
  );
}
