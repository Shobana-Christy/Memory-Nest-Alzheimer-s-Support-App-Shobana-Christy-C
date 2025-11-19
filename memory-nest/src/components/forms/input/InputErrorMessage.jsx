const InputErrorMessage = ({hasError, message}) => {
    return <> { hasError && <p className="error">{message}</p>}</>
}

export default InputErrorMessage;