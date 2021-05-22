import React from 'react';

import './sign.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignPage = () => (
  <div className='sign'>
    <SignIn/>
    <SignUp/>
  </div>
);
  
export default SignPage;