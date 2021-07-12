import React, { useState, useEffect } from "react";

export default function Todos() {
	const [inputValue, setInputValue] = useState("");
	const [tdl, setTdl] = useState([]);

	const changeInput = (evt) => {
		const { value } = evt.target;
		setInputValue(value);
	};
	useEffect(() => {
		tdl.map((item) => {
			if (item === inputValue) {
				setInputValue("");
				let holder = document.createElement("li");
				holder.innerHTML = item;
				holder.key = new Date();
				holder.style.color = "red";
				holder.addEventListener("click", () => {
					holder.remove();
				});
				document.querySelector(".todos").appendChild(holder);
			}
		});
	}, [tdl, setTdl]);
	return (
		<div className="widget-programmers container">
			<h2>To Do List</h2>
			<div>
				<input
					id="input-todolist"
					type="text"
					onChange={changeInput}
					value={inputValue}
				/>
				<button
					id="resetInput"
					onClick={() =>
						!tdl.includes(inputValue) && inputValue.length > 0
							? setTdl((tdl) => [...tdl, inputValue])
							: null
					}
				>
					Add
				</button>
			</div>

			<ol className="todos"></ol>
		</div>
	);
}
