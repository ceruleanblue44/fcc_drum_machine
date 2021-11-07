import React from 'react';
import './App.css';
// import App from './App.js'
// import sampleCollection from './sampleCollection.js';
// import DrumPadPanel from './DrumPadPanel.js'

class DrumPad extends React.Component {
	constructor(props) {
		super(props);

		this.playSample = this.playSample.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	playSample() {
		const sample = document.getElementById(this.props.keyTrigger);
		sample.play();
	}

	handleClick() {
		this.props.updateDisplay(this.props.sampleId);
		this.playSample();
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress(e) {
		if (e.keyCode === this.props.keyCode) {
			this.handleClick();
		}
	}

	render() {
		return (
			<div
				className="drum-pad"
				id={this.props.sampleId}
				onClick={this.handleClick}
				onKeyPress={this.handleKeyPress}
			>
				<p className="key">{this.props.keyTrigger}</p>
				<audio
					id={this.props.keyTrigger}
					className="clip"
					src={this.props.sampleSrc}
				/>
			</div>
		);
	}
}

export default DrumPad;
