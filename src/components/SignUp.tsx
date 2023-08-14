
function SignUp() {

    return (
        <form className="form">
            <div className="field">
                <label htmlFor="name">Name</label>
                <input id='name' />
            </div>

            <div className="field">
                <label htmlFor="password">Password</label>
                <input type='password' id='password' />
            </div>

            <div className="field">
                <button type="submit">Sign Up</button>
            </div>

            <div className="field">
                <a href="./App">Login</a>
            </div>

        </form>
    )
}


export default SignUp;