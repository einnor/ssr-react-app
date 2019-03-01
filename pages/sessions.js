import React, { Component } from 'react';
import axios from 'axios';

import SessionCard from "../src/SessionCard";


class Sessions extends Component {
	static async getInitialProps() {
		var promise = axios.get('http://localhost:4000/sessions')
			.then((response) => ({ hasErrored: false, sessionData: response.data }))
			.catch((error) => ({ hasErrored: true, message: error.message }));
		return promise;
	}

	constructor(props) {
		super(props);
		this.state = {
			hasErrored: props.hasErrored,
			message: props.message,
			sessionData: props.sessionData,
		}
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	render() {
		const { sessionData } = this.state;
		return (
			<div className="container">
                <div className="row">
                    <div className="card-deck">
                        {this.state.sessionData.map((session) =>
                            <div className="card col-4 cardmin margintopbottom" key={session.id}>
                                <SessionCard session={session}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
		);
	}
}

export default Sessions;
