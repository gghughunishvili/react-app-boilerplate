import React, { Component } from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'

class AdminLayout extends Component {
    render() { 
        return (
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
                <AppBar title="Admin Bar" />
                {this.props.children}
            </div>
          </MuiThemeProvider>
        )
    }
}

export default AdminLayout