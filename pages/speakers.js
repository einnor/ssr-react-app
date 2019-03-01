import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

import SpeakerCard from '../src/SpeakerCard';


class Speakers extends Component {
	static getSpeakerUrl() {
		if (process.env.NODE_ENV === 'production') {
			return process.env.RESTURL_SPEAKERS_PROD;
		} else {
			return process.env.RESTURL_SPEAKERS_DEV;
		}
	}

	static async getInitialProps() {
		var promise = axios.get(Speakers.getSpeakerUrl())
			.then((response) => ({ hasErrored: false, speakerData: response.data }))
			.catch((error) => ({ hasErrored: true, message: error.message }));
		return promise;
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
		
	}

	componentWillUnmount() {
		
	}

	render() {
		const { speakerData } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="card-deck">
						{
							speakerData.map((speaker) => (
								<div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
									<SpeakerCard speaker={speaker} />
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
