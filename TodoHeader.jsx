class TodoHeader extends React.Component {
    render() {
        const { title,userName,items } = this.props;
        return(
            <div>
                <h1>{ title }</h1>
                <span>哈囉，{ userName }：你有 { items } 項未完成待辦事項</span>
            </div>
        );
    }
}

//防呆機制
TodoHeader.propTypes = {
  title: React.PropTypes.string,
  userName: React.PropTypes.string,
  items: React.PropTypes.number
};

window.App.TodoHeader = TodoHeader;