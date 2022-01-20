import React from 'react';

const styles = {
    padding: 0,
};

export function NavBar() {

    return (<div className="container-fluid" style={styles}>
        <nav className="navbar navbar-light bg-light">
            <h3 style={{marginLeft: '15px'}}>Dane z czujnika</h3>
        </nav>
    </div>);
}
