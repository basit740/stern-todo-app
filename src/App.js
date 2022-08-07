import './App.css';

import Todo from './components/Todo/Todo.js';

function App() {
	return (
		<div className='App'>
			<h1>The Todo application</h1>

			<div className='todos'>
				<h3>All Todos</h3>
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
