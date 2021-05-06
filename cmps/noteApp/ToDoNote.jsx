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
                <div key={idx}>{toDo}</div>
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
                <NoteMenu onNoteColorChange={this.props.onNoteColorChange} onPinned={this.props.onPinned} onRemoveNote={this.props.onRemoveNote} note={this.state.note} />
            </div>
        )
    }
}
