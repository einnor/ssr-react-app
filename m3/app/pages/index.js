import React, { Component } from 'react';

import DigitalClock from '../src/DigitalClock';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleString(),
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	tick() {
		this.setState(() => ({ time: new Date().toLocaleString() }));
	}

	render() {
		const { time } = this.state;
		return (<DigitalClock time={time} />);
	}
}

export default Index;