import React from "react";

export default Todos = () => {
	return (
		<div className="widget-programmers container">
			<h2>To Do List</h2>
			<form>
				<label>
					Action
					<input type="text" value="" onChange="" />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<div className="list"></div>
		</div>
	);
};
