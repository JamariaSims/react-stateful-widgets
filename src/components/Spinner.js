import React, { useState } from "react";

export default function Spinner() {
	const [spinnerOn, setSpinnerOn] = useState(true);
	const toggleSpinner = () => {
		spinnerOn ? setSpinnerOn(false) : setSpinnerOn(true);
	};

	return (
		<div className="widget-spinner container">
			<h2>Spinner</h2>
			{spinnerOn && (
				<div id="spinner" className="spinner">
					--+--
				</div>
			)}
			<button id="toggleSpinner" onClick={toggleSpinner}>
				{spinnerOn ? "Show" : "Hide"} Spinner
			</button>
		</div>
	);
}
