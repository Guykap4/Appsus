import { NoteMenu } from "./NoteMenu.jsx"

export class ToDoNote extends React.Component {

    state = {
        note: '',
        // isEdit: false
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    renderTodos = (toDos) => {
        return toDos.map((toDo, idx) => {
            return (
                <div className={toDo.isDone ? 'checked' : ''} key={idx} onClick={() => this.props.onToggleDone(idx, this.state.note.id)}>
                    <img src={`../../assets/img/${toDo.isDone? 'checked-square-icon' : 'square-icon'}.png`} />
                    {toDo.toDo}
                    <button onClick={() => this.props.onRemoveTodo(idx, this.state.note.id)}>X</button>
                    </div>
            )
        })
    }

    render() {
        if (!this.state.note) return <div>Loading...</div>
        return (
            <div style={{ backgroundColor: this.state.note.color }} className="todo-note note">
                <div className="note-content">
                    {this.renderTodos(this.state.note.info.toDos)}
                </div>
                <button onClick={this.props.onAddTodo}><img src="../../assets/img/plus-icon.png" /></button>
                <NoteMenu onRemoveNote={this.props.onRemoveNote} note={this.state.note}onNoteColorChange={this.props.onNoteColorChange} onPinned={this.props.onPinned} onCopyToClipboard={this.props.onCopyToClipboard}  />
            </div>
        )
    }
}
