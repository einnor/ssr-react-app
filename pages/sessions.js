import React, { Component } from 'react';
import axios from 'axios';

import SessionCard from "../src/SessionCard";
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();


class Sessions extends Component {
	static getSessionsUrl() {
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SESSIONS_PROD
                || publicRuntimeConfig.RESTURL_SESSIONS_PROD;
        } else {
            return process.env.RESTURL_SESSIONS_DEV;
        }
    }

	static async getInitialProps() {
		var promise = axios.get(Sessions.getSessionsUrl())
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
