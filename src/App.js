import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
	const [
		showAddTask,
		setShowAddTask
	] = useState(false);
	const [
		tasks,
		setTasks
	] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const getTasksFromServer = await fetchTasks();
			setTasks(getTasksFromServer);
		};
		getTasks();
	}, []);

	// fetch tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();
		return data;
	};

	//fetch task
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();
		return data;
	};

	// toggle addTask display
	const taskCreatorDisplay = () => {
		setShowAddTask(!showAddTask);
	};

	// add task
	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method  : 'POST',
			headers : {
				'Content-type' : 'application/json'
			},
			body    : JSON.stringify(task)
		});

		const data = await res.json();

		setTasks([
			...tasks,
			data
		]);

		// const id = Math.floor(Math.random() * 1000) + 1;
		// const newTask = { id, ...task };
		// setTasks([
		// 	...tasks,
		// 	newTask
		// ]);
	};
	// delete task
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method : 'DELETE'
		});
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method  : 'PUT',
			headers : {
				'Content-type' : 'application/json'
			},
			body    : JSON.stringify(updateTask)
		});

		const data = await res.json();
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
	};
	return (
		<Router>
			<div className='container'>
				<Header title='Task Tracker' toggleDisplay={taskCreatorDisplay} showAdd={showAddTask} />
				<Route
					path='/'
					exact
					render={(props) => (
						<React.Fragment>
							{showAddTask && <AddTask onAdd={addTask} />}
							{tasks.length > 0 ? (
								<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
							) : (
								'No Tasks have been recorded!'
							)}
						</React.Fragment>
					)}
				/>
				<Route path='/about' component={About} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
