const {InputField} = window.App;
class TodoItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { editable: false};
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }
    toggleEditMode() {
        return this.setState({ editable: !this.state.editable });
    }
    renderView() {
        const { title, completed, onDel, onToggle } = this.props;
        return (
        <div>
            <input onChange={()=> onToggle && onToggle(!completed)} type="checkbox" checked={completed} />
            <span onDoubleClick={this.toggleEditMode}>{title} </span>
            <button onClick={()=>onDel && onDel()}>x</button>
        </div>
        );
    }
    renderEdit() {
        const { title } = this.props;
        return (
            <InputField
                autoFocus
                placeholder="編輯待辦事項"
                value={ title }
                onBlur={ this.toggleEditMode }
                onKeyDown={(e) => {
                    if (e.keyCode === 27) {
                    e.preventDefault();
                    this.toggleEditMode();
                    }
                }}
            />
        );
    }
    render() {
        return this.state.editable ? this.renderEdit() : this.renderView();
    }
}

//防呆機制
TodoItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
};

window.App.TodoItem = TodoItem;