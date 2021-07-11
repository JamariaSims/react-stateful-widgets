import React, { useState } from "react";

const initialMood = "Not sure how I feel";
const happyMood = "Quite happy!";
const sadMood = "Rather sad";

export default function Moods() {
	/* STEP 1 */
	const [mood, setMood] = useState("Not sure how I feel");
	const makeHappy = () => {
		setMood("Quite happy!");
	};
	const makeSad = () => {
		setMood("Rather sad");
	};
	const reset = () => {
		setMood("Not sure how I feel");
	};

	const style = {
		fontSize: "1.5em",
		marginBottom: "0.3em",
		color: mood == "Quite happy!" ? "royalblue" : "crimson",
	};

	return (
		<div className="widget-moods container">
			<h2>Moods</h2>
			<div id="mood" style={style}>
				{mood}
			</div>
			<div>
				<button id="makeHappy" onClick={makeHappy}>
					Make Happy
				</button>
				<button id="makeSad" onClick={makeSad}>
					Make Sad
				</button>
				<button id="resetMood" onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
}
