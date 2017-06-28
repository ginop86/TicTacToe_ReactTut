import React, { Component } from 'react'
import Home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()


class Template extends Component {
    render() {
        return (
        <MuiThemeProvider>
            <div>
                <header>Tic Tac Toe</header>
                <main>
                    <RaisedButton label={'Test Button'} primary={true} onTouchTap={() =>{console.log('hello I work')}} />
                    <Home />
                    {this.props.children}
                </main>
            </div>
        </MuiThemeProvider>    
        )
    }
}

export default Template