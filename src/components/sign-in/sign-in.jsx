import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleChange = event => {
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
        <h2>Ya tengo una cuenta</h2>
        <span>Ingrese con su email y contraseña</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            label='email'
            value={this.state.email} 
            required 
            handleChange={this.handleChange}
          />
          <FormInput 
            name='password' 
            type='password' 
            label='contraseña'
            value={this.state.password} 
            required 
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'>INGRESAR</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignIn>INGRESAR CON GOOGLE</CustomButton>
          </div>
        </form>
      </div>
      )
    }
  }
  
  export default SignIn;