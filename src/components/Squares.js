import React, { useState } from "react";

const listOfSquareIds = ["sqA", "sqB", "sqC", "sqD"];

export default function Squares() {
	const [squares, setSquares] = useState(listOfSquareIds);
	const [activeSquare, setActiveSquare] = useState(null);
	const getClassName = (id) => {
		if (id === activeSquare) {
			return ` active ${activeSquare}`;
		} else {
			return "";
		}
	};

	const markActive = (id) => {
		id === activeSquare ? null : setActiveSquare(id);
	};
	return (
		<div className="widget-squares container">
			<h2>Squares</h2>
			<div className="squares">
				{squares.map((id) => (
					<div
						id={id}
						key={id}
						className={`square${getClassName(id)}`}
						onClick={() => markActive(id)}
					></div>
				))}
			</div>
		</div>
	);
}
