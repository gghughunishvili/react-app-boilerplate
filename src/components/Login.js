import React, { Component } from 'react'
import MainLayout from '../layouts/main/MainLayout'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { apiBaseUrl } from '../consts/api'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }    
    }

    handleClick(event){
        var self = this;
        var payload={
            "email":this.state.username,
            "password":this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
            console.log(response);
            if(response.data.code == 200){
                console.log("Login successfull");
            } else {
                console.log("wrong credentials");
                alert("wrong credentials");
            }
        })
        .catch(function (error) {
            console.log(error)
        });
     }
    
    render() {
        return (
            <MainLayout>
                <div className='align-centered'>
                    <Paper zDepth={2} style={paperStyle} className="v-centered-element">
                        <TextField 
                            floatingLabelText="Email"
                            onChange = {(event,newValue) => this.setState({email:newValue})}
                        /><br />
                        <TextField 
                            floatingLabelText="Password" 
                            type="password" 
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        /><br />
                        <RaisedButton 
                            className="login-button"
                            label="login" 
                            primary={true} 
                            style={style} 
                            onClick={(event) => this.handleClick(event)}
                        />
                    </Paper>
                </div>
            </MainLayout>
        )
    }
}

const style = {
 margin: 15,
}

const paperStyle = {
    margin: "auto",
    padding: 15,
    paddingTop: 5,
    width: 280
}

export default Login