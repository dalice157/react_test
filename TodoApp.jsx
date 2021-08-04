const {TodoHeader, InputField, TodoList} = window.App;
const _deleteTodo = (todos, id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) todos.splice(idx, 1);
    return todos;
};
const _toggleTodo = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};
class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    id: 0,
                    title: 'Item 1',
                    completed: false
                },
                {
                    id: 1,
                    title: 'Item 2',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Item 3',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Item 4',
                    completed: false
                },
                {
                    id: 4,
                    title: 'Item 5',
                    completed: false
                },
                {
                    id: 5,
                    title: 'Item 6',
                    completed: false
                },
                {
                    id: 6,
                    title: 'Item 7',
                    completed: false
                },
                {
                    id: 7,
                    title: 'Item 8',
                    completed: true
                },
                {
                    id: 8,
                    title: 'Item 9',
                    completed: true
                },
                {
                    id: 9,
                    title: 'Item 10',
                    completed: false
                },
                {
                    id: 10,
                    title: 'Item 11',
                    completed: false
                },
                {
                    id: 11,
                    title: 'Item 12',
                    completed: false
                },
            ]
        };
    }
    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoHeader 
                    title="我的待辦清單" 
                    userName="DA Chu" 
                    items={todos.filter((todo) => !todo.completed).length} 
                />
                <InputField placeholder="新增待辦事項" />
                <TodoList 
                    todos={todos} 
                    onDelTodo={
                        (id) => this.setState({
                            todos: _deleteTodo(todos, id)
                        })
                    }
                    onToggleTodo={
                        (id,completed)=>this.setState({
                        todos: _toggleTodo(todos, id, completed)
                        })
                    } 
                />
            </div>
        );
    }
}

window.App.TodoApp = TodoApp;