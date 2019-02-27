class Hello extends React.Component {
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
		return React.createElement('h1', {}, time);
	}
}

ReactDOM.render(
	React.createElement(Hello, { time: new Date().toLocaleString() }, null),
	document.getElementById('app')
);