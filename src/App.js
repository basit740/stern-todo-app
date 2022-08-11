import './App.css';

import { useState } from 'react';

import Todo from './components/Todo/Todo.js';

function App() {
	const [todoTitle, setTodoTitle] = useState(''); ///destructing the array

	const [allTodos, setAllTodos] = useState([]);

	// const stateArray = useState('')

	// stateArray[0]; //=>realTimeText
	// const realTimeText =stateArray[0];
	// stateArray[1];	//=>setRealTimeText
	// const setRealTimeText = stateArray[1]

	function textChangeHandler(event) {
		let inputValue = '';
		inputValue = event.target.value;

		setTodoTitle(inputValue);
	}

	function submitHandler(event) {
		event.preventDefault();

		console.log(todoTitle);
	}
	return (
		<div className='App'>
			<h1>The Todo application</h1>

			<div className='todos'>
				<h3>All Todos</h3>
				{/* <input type='text' onChange={textChangeHandler} /> */}

				<form onSubmit={submitHandler}>
					<input
						type='text'
						onChange={textChangeHandler}
						placeholder='todo title'
					/>
					<button type='submit'>Add Todo</button>
				</form>

				<label></label>
				<div className='todos-content'>
					<Todo title='First Todo' status='Not Started'></Todo>

					<Todo title='Second Todo' status='Completed'></Todo>
					<Todo title='Third Todo' status='Completed'></Todo>
				</div>
			</div>
		</div>
	);
}

export default App;

// state based rendering in react
