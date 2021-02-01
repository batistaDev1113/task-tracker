import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
	const [
		showAddTask,
		setShowAddTask
	] = useState(false);
	const [
		tasks,
		setTasks
	] = useState([
		{
			id       : 1,
			text     : "Doctor's appointment",
			day      : 'Feb 5th at 2:00 pm',
			reminder : true
		},
		{
			id       : 2,
			text     : 'Meeting at School',
			day      : 'Oct 10h at 3:00 pm',
			reminder : false
		},
		{
			id       : 3,
			text     : 'Gym Investors',
			day      : 'Aug 9th at 10:00 am',
			reminder : true
		}
	]);

	// toggle addTask display
	const taskCreatorDisplay = () => {
		setShowAddTask(!showAddTask);
	};

	// add task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 1000) + 1;
		const newTask = { id, ...task };
		setTasks([
			...tasks,
			newTask
		]);
	};
	// delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};
	return (
		<div className='container'>
			<Header title='Task Tracker' toggleDisplay={taskCreatorDisplay} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No Tasks have been recorded!'
			)}
		</div>
	);
}

export default App;
