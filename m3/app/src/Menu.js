import React, { Component } from 'react';

export default class Menu extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Speakers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sessions</a>
                        </li>
                    </ul>
                </div>
            </nav>
		);
	}
}