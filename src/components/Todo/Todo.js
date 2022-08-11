import './Todo.css';

function Todo(props) {
	return (
		<div className='todo'>
			<h4>{props.title}</h4>
			<div>
				<span>Status: </span>
				<span>{props.status}</span>
			</div>
		</div>
	);
}

export default Todo;

// export function Test(title,status) {
// 	return <div>Test</div>;
// }
