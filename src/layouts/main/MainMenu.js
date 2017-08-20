import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { teal500 } from 'material-ui/styles/colors'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'






export default class MainMenu extends Component {
  render() {
      return (
          <div>
              <Paper style={paperStyle} zDepth={1}>
                <div className='clear'>
                  <div className='left'>
                    <Link to="/"><FlatButton label="Home" style={buttonSyle} /></Link>
                    <Link to="about" ><FlatButton label="About" style={buttonSyle} /></Link>
                    <Link to="contact" ><FlatButton label="Contact" style={buttonSyle} /></Link>
                  </div>
                  <div className='right'>
                    <Link to="login"><FlatButton label="Login" style={buttonSyle} /></Link>
                    <Link to="register" ><FlatButton label="Register" style={buttonSyle} /></Link>
                  </div>
                </div>
              </Paper>
          </div>
      )
  }
}

const paperStyle = {
  height: 70,
  width: '100%',
  color: '#fff',
  paddingTop: 15,
  paddingLeft: 20,
  paddingRight: 20,
  fontSize: 20,
  display: 'inline-block',
  backgroundColor: teal500
}

const buttonSyle = {
  color: "#fff"
}