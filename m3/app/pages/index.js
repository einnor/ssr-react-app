import React, { Component } from 'react';

import DigitalClock from '../src/DigitalClock';

class Index extends Component {
	static async getInitialProps() {
		return ({ time: new Date().toISOString() });
	}

	constructor(props) {
		super(props);
		this.state = {
			time: props.time,
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	tick() {
		this.setState(() => ({ time: new Date().toISOString() }));
	}

	render() {
		const { time } = this.state;
		return (<DigitalClock time={time} />);
	}
}

export default Index;