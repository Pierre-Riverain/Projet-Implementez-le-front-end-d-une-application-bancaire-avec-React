import "./index.css";

export function Button({ className, onClick, type, children}) {
    const classNames = "button " + className; 
    return (
        <button className={classNames} onClick={onClick} type={type}>
            {children}
        </button>
    );
}