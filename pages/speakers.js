import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

import SpeakerCard from '../src/SpeakerCard';
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();


class Speakers extends Component {
	static getSpeakerUrl() {
		if (process.env.NODE_ENV === 'production') {
			return process.env.RESTURL_SPEAKERS_PROD
                || publicRuntimeConfig.RESTURL_SPEAKERS_PROD;
		} else {
			return process.env.RESTURL_SPEAKERS_DEV;
		}
	}

	static async getInitialProps(req) {
		const isServer = !!req;
		if (isServer) {
			// Runs on node server only
			var promise = axios.get(Speakers.getSpeakerUrl())
			.then((response) => ({ isLoading: false, hasErrored: false, speakerData: response.data }))
			.catch((error) => ({ hasErrored: true, message: error.message }));
		return promise;
		} else {
			// Run in client browser only
			return {
				speakerData: [...Array(5)].map((_, i) => ({
					firstName: '',
					lastName: '',
					id: i,
				})),
				isLoading: true,
			};
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			hasErrored: props.hasErrored,
			message: props.message,
			speakerData: props.speakerData,
		}
	}

	componentDidMount() {
        axios
            .get(Speakers.getSpeakerUrl())
            .then((response) => {
                this.setState({
                    hasErrored: false,
                    isLoading: false,
                    speakerData: response.data
                });
            })
            .catch((error) => {
                this.setState({
                    hasErrored: true,
                    isLoading: false,
                    speakerData: []
                });
            });
    }

	componentWillUnmount() {
		
	}

	render() {
		const { speakerData, isLoading } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="card-deck">
						{
							speakerData.map((speaker) => (
								<div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
									<SpeakerCard isLoading={isLoading} speaker={speaker} />
								</div>
							))
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Speakers;
