const Input = ({ id, label, type, value, ref, required, handleChange }) => {
    return (
        <>
            <label htmlFor={id}>
                {label}
                {required && '*'}
            </label>
            <input id={id} type={type || 'text'} value={value} ref={ref} onChange={handleChange}/>
        </>
    )
}
export default Input;