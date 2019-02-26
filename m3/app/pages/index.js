import React, { Component } from 'react';

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

	componentDidUnmount() {
		clearInterval(this.interval);
	}

	tick() {
		this.setState(() => ({ time: new Date().toLocaleString() }));
	}

	render() {
		const { time } = this.state;
		return (<h1>{time}</h1>);
	}
}

export default Index;