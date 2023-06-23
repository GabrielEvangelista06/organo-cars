import './DropdownList.css';

export default function DropdownList(props) {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select onChange={evt => props.changed(evt.target.value)} required={props.required} value={props.value}>
        <option value=""></option>
        {props.itens.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
