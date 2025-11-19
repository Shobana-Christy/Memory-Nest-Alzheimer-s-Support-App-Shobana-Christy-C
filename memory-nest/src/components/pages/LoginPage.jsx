import Button from "../common/Button";

const LoginPage = () => {

    return (
        <div className="login-page">
            <form action='/home'>
                <div className="login-form">
                    <input type="text" name="user-name" placeholder="User Name" />
                    <input type="password" name="password" placeholder="Password" />
                    <Button type="submit" name="submit" label={"Submit"}></Button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;