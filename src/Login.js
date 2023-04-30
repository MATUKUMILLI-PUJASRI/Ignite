import React from 'react';

const Login = () => {
    
    return (
        <div>
            <div className="Header">
                <p>Login</p>
                <div className="division">
                    <form className="ui form segment">
                        <div className="field">
                            <label>E-mail</label>
                            <input placeholder="E-mail" name="E-mail" type="text" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="password" name="password" type="password" />
                        </div>
                        <div className="ui primary submit button">Submit</div> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;