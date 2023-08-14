
function LoginForm() {

    return (
        <form className="form">
            <div>
                <h4><center>Login</center></h4>
            </div>
            <div className="field">
                <div><label htmlFor="email">Username</label></div>
                <input type='email' id='email' />
            </div>

            <div className="field">
                <div><label htmlFor="password">Password</label></div>
                <input type='password' id='password' />
            </div>

            <div className="field">
                <p><button type="submit">Login</button></p>
            </div>

            <div className="field">
                <a href="">Sign Up</a>
            </div>

        </form>
    )
}


export default LoginForm;