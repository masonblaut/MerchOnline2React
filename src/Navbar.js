import React from 'react';
import {Link } from 'react-router-dom';

class Navbar extends React.Component {
    render () {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand" href="#">Merch Online</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Main</Link>
                        <Link className="nav-item nav-link" to="/new">New</Link>
                    </div>
                </div>
            </nav>
            </div>
        );  
        
    }
}

export default Navbar;