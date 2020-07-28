import React from 'react';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'saraasa',
            password: 'asdsas'
        }
    }

    handleOnChange = event => {
        const {value, name} = event.target;    
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required 
                        onChange={this.handleOnChange}/>
                    <label>Email</label>
                    <input 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                        onChange={this.handleOnChange}/>
                    <label>Password</label>

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;