const Button = ({ id, name, label, value, classes,onClick }) => {

    return (
        <button id={id} name={name} value={value} className={classes? classes: "button-class"} onClick={onClick}>
            {label}
        </button>
    );
}
export default Button;