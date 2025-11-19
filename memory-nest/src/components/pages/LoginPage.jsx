
const LoginPage = () => {

    return (
        <div className="login-page">
            <form action='/home'>
                <div className="login-form">
                    <input type="text" name="user-name" placeholder="User Name" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit" name="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;