import React,{Component,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
import {signIn, cleanError} from '../../actions/AuthActions';
import {bindActionCreators} from 'redux';
import style from './style'
import {connect} from 'react-redux';
import {Formik} from 'formik';
import UserInput from '../../genralComponents/UserInput'
class App extends Component{
  constructor(props) {
    super(props);
   // this.state = {isLoading: true};
   
  }
     EmailInput =formikProps => {
      const {
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        isSubmitting,
        values,
      } = formikProps;
  
      return (
        <UserInput
        placeholder="E-mail"
        onTextChange={handleChange('email')}
        value={values.email}
       
      />
      );
    };
       
    PasswordInput = formikProps => {
      const {
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        isSubmitting,
        values,
      } = formikProps;
      return (
        <UserInput
        //id="outlined-basic"
        secureTextEntry="password"
        placeholder="Password"
        onTextChange={handleChange('password')}
        value={values.password}
        
      />
      );
    };
    
 
    LoginButton = formikProps => {
      const {
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        isSubmitting,
        values,
      } = formikProps;
      return (
        <Button variant="outlined" color="primary"
      style={style.button} onClick={handleSubmit}>
              Login
            </Button>
      );
    };

    formBody = formikProps => {
      return (
        <form 
        style={style.container}
        
        noValidate autoComplete="off">
          {/* {this.renderError()} */}
            <div>
               {this.EmailInput(formikProps)}
               <br />
            
            
             {this.PasswordInput(formikProps)}
             <br />
             {this.LoginButton(formikProps)}
             </div>
          {/* {this.renderPassword(formikProps)}
          {this.actionRow(formikProps)} */}
        </form>
      );
    };
    render(){
      return (
       
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
       // validationSchema={ValidationSchema}
        onSubmit={(values, {setSubmitting}) => {
          console.log('TCL: LoginScreen -> LoginForm -> values', values);
          this.props.signIn(values, this.props.navigation);
        }}>
        {this.formBody}
      </Formik>
      );
    }    
} 


const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  error: state.auth.error,
});
const mapDispatchToProps = dispatch => ({
  signIn: bindActionCreators(signIn, dispatch),
  cleanError: bindActionCreators(cleanError, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);