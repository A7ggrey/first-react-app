
function LoginForm() {

    return (
        <form className="form">
            <div>
                <h4><center>Sign Up</center></h4>
            </div>
            <div className="field">
                <label htmlFor="fname">First Name</label>
                <input id='fname' />
            </div>

            <div className="field">
                <label htmlFor="lname">Last Name</label>
                <input id='lname' />
            </div>

            <div className="field">
                <label htmlFor="oname">Other Name</label>
                <input id='oname' />
            </div>

            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
            </div>

            <div className="field">
                <label htmlFor="password">Password</label>
                <input type='password' id='password' />
            </div>

            <div className="field">
                <button type="submit">Login</button>
            </div>

            <div className="field">
                <a href="./Registration">Sign Up</a>
            </div>

        </form>
    )
}


export default LoginForm;