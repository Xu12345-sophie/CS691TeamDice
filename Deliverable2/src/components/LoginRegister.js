import React, {Component} from 'react';
import fire from '../config/Fire';


class LoginRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            email1: '',
            password1: '',
            fireErrors: '',
            formTitle: 'Login',
            formTitle1: 'Register',
            
            
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email1, this.state.password1)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    render(){

        
        let errorNotification = this.state.fireErrors ?
            (<div className="Error">{this.state.fireErrors}</div>) : null;

        

        return(
            <div className="form_block">
                
            <div>
                <h1>PC Builder Web App</h1>
                
            </div>
        
                <div className="body">
                    {errorNotification}
                    <div id="title">{this.state.formTitle}</div>
                    <form>
                        
                        <input type="text" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />
                        

                        <input type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" />

                        <input type="submit" className="loginBtn" onClick={this.login} value="Enter" />
                    </form>
                    
                    <div id="title">{this.state.formTitle1}</div>
                    <form>
                        <input type="text" 
                        value={this.state.email1} 
                        onChange={this.handleChange} 
                        name="email1" />

                        <input type="password" 
                        value={this.state.password1} 
                        onChange={this.handleChange} 
                        name="password1" />

                        <input type="submit" className="registerBtn" onClick={this.register} value="Enter" />
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default LoginRegister;