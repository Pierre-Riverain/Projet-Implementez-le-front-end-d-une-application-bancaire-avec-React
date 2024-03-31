import "./index.css";

export function Input({id, inputName, disabled, onChange, type, value, required}) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{inputName}</label>
            <input type="text" id={id} onChange={onChange} disabled={disabled} type={type} value={value} required={required}/>
        </div>
    );
}