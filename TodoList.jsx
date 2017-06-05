const {TodoItem} = window.App;
class TodoList extends React.Component {
    render() {
        const { todos, onDelTodo, onToggleTodo } = this.props;
        const todoItems = todos.map((todo) => (
            <li key={todo.id}>
                <TodoItem 
                    title={todo.title} 
                    completed={todo.completed} 
                    onDel={()=>onDelTodo && onDelTodo(todo.id)} 
                    onToggle={(completed)=>onToggleTodo && onToggleTodo(todo.id, completed)}
                />
            </li>
        ));
        return <ul>{todoItems}</ul>;
    }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

window.App.TodoList = TodoList;