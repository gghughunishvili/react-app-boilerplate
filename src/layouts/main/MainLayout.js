import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepOrange400, cyan900, teal500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MainMenu from './MainMenu'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan900,
    primary2Color: teal500,
    primary3Color: deepOrange400,
  },
}, {
  avatar: {
    borderColor: null,
  }
})

class MainLayout extends Component {
    handleTouchTap() {
      alert('onClick triggered on the title component');
    }
    
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <MainMenu />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default MainLayout