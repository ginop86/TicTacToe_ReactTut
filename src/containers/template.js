import React, { Component } from 'react'


class Template extends Component {
    render() {
        return (
            <div>
                <header>Tic Tac Toe</header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Template