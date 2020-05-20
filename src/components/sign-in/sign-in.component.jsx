import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
constructor(props){
    super(props);
    this.state={
        email:'',
        password:''
    }
}
HandleSubmit= event =>{
    event.preventDefault();
    this.setState({email:'',password:''})
}

HandleChange =event => {
    const {value,name }=event.target;
    this.setState({[name]:value})
};


render(){

    return(
<div className='sign-in'>
<h2>I already have an account </h2>

<span>Sign in with your email and password</span>
<form onSubmit={this.HandleSubmit} >
    <FormInput 
    name="email"
     type="email"
     value={this.state.email} 
     handleChange={this.HandleChange}
      required
      label="email"
      /> 
    {/**required is a native html attribute */}
    
    <FormInput 
    name="password" 
    type="password" 
    value={this.state.password} 
    handleChange={this.HandleChange} 
    required
    label="password"
    /> 
    
    <CustomButton type='submit' >SIGN IN</CustomButton>

</form>
</div>

    );
}

}
export default SignIn;