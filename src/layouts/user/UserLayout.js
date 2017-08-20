import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {green100, green500, green700} from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  }
})

class UserLayout extends Component {
    render() { 
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar title="User Bar" />
                {this.props.children}
            </div>
          </MuiThemeProvider>
        )
    }
}

export default UserLayout