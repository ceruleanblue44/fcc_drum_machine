import React from 'react';
import DrumPad from './DrumPad.js';
import sampleCollection from './sampleCollection.js';
import './App.css';

const DrumPadPanel = (props) => {
	let drumPadPanel = sampleCollection.map((obj, i, arr) => {
		return (
			<DrumPad
				key={arr[i].keyCode}
				sampleId={arr[i].id}
				sampleSrc={arr[i].url}
				keyTrigger={arr[i].keyTrigger}
				keyCode={arr[i].keyCode}
				// updateDisplay is the prop/callback from the parent to be passed down so
				// it can be used to update display (change/set state) from the grandchild
				updateDisplay={props.updateDisplay}
			/>
		);
	});
	// console.log(drumPadPanel);
	return <div>{drumPadPanel}</div>;
};

export default DrumPadPanel;
