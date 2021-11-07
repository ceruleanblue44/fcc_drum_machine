import React from 'react';
import DrumPadPanel from './DrumPadPanel.js';
import './App.css';
// import DrumPad from './DrumPad.js'
// import sampleCollection from './sampleCollection.js';

// const getSampleID = () => {
// 	let sampleID = sampleCollection.map(arr => arr.id);
// 	console.log(sampleID);
// };

// getSampleID();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: String.fromCharCode(160),
		};
		this.showClipName = this.showClipName.bind(this);
		this.clearDisplay = this.clearDisplay.bind(this);
	}

	clearDisplay() {
		this.setState({
			display: String.fromCharCode(160),
		});
	}

	showClipName(clipId) {
		this.setState({
			display: clipId,
		});
		setTimeout(() => this.clearDisplay(), 1000);
	}

	render() {
		return (
			<div className="container col-10 ">
				<div className="title">
					<p>FCC Frontend Libraries Project 3: Drum Machine</p>
				</div>
				<div id="drum-machine" className="row mx-auto drum-machine">
					<div className="col-sm drum-pad-panel">
						<DrumPadPanel
							updateDisplay={this.showClipName}
							// Sending updateDisplay down so we can use it from the grandchild
						/>
					</div>
					<div className="col-sm my-auto display-container">
						<p id="display" className="col-sm-9 display">
							{this.state.display}
						</p>
						<p className="cb">by cerulean_blue</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
