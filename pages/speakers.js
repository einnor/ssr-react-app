import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';


class Speakers extends Component {
	static async getInitialProps() {
		var promise = axios.get('http://localhost:4000/speakers')
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
			<div>
				<Link href='/sessions'>
					<a>Sessions</a>
				</Link>
				<ul>
					{
						speakerData.map((speaker) => (
							<li key={speaker.id}>
								{speaker.firstName} {speaker.lastName}
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}

export default Speakers;
