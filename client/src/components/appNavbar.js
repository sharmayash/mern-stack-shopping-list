import React, { Component } from 'react'

class AppNavbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey darken-3">
                        <a href="/" className="brand-logo center" >Shopping List</a>
                        <ul className="right">
                            <li><a href="https://github.com/sharmayash">Github</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default AppNavbar;