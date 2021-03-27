import React from 'react';

const Task = ({ task: { id, title, state }, onArchiveTask, onPintTask }) => {
	return (
		<div className="list-item">
			<input type="text" value={title} readonly={true} />{' '}
		</div>
	);
};

export default Task;
