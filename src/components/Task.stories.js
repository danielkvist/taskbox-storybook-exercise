import React from 'react';

import Task from './Task';

// There are two basic levels or organization: the component
// and its child stories.
// You can have as many stories per component as you need.
//
// This default export contains the component itself
// and a title to reference it.
export default {
	component: Task,
	title: 'Task',
};

const Template = (args) => <Task {...args} />;

// To define our stories, we export a function for each one
// to generate a story.
// The story is a function that returns a rendered element with
// a set of props in a given state.
export const Default = Template.bind({});
Default.args = {
	task: {
		id: '1',
		title: 'Test task',
		state: 'TASK_INBOX',
		updatedAT: new Date(2018, 0, 1, 9, 0),
	},
};

export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		...Default.args.task,
		state: 'TASK_PINNED',
	},
};

export const Archived = Template.bind({});
Archived.args = {
	task: {
		...Default.args.task,
		state: 'TASK_ARCHIVED',
	},
};
