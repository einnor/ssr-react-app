import React, { Component } from 'react';
import axios from 'axios';


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
			<ul>
				{
					sessionData.map((session) => (
						<li key={session.id}>
							{session.title} {session.id}
						</li>
					))
				}
			</ul>
		);
	}
}

export default Sessions;
