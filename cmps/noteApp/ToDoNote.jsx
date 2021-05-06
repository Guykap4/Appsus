import { NoteMenu } from "./NoteMenu.jsx"
import { ToDosList } from "./ToDoList.jsx"

export class ToDoNote extends React.Component {

    state = {
        note: '',
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    render() {

        const { onRemoveTodo, onToggleDone, onUpdateNote } = this.props

        if (!this.state.note) return <div>Loading...</div>
        return (
            <div style={{ backgroundColor: this.state.note.color }} className="todo-note note">
                <div className="note-content">

                    <ToDosList
                        note={this.state.note}
                        onRemoveTodo={onRemoveTodo}
                        onToggleDone={onToggleDone}
                        onUpdateNote={onUpdateNote}
                    />

                    <button onClick={() => this.props.onAddTodo(this.state.note.id)}><img src="../../assets/img/plus-icon.png" /></button>
                </div>
                <NoteMenu onCopyToClipboard={this.props.onCopyToClipboard} onRemoveNote={this.props.onRemoveNote} note={this.state.note} onNoteColorChange={this.props.onNoteColorChange} onPinned={this.props.onPinned} />
            </div>
        )
    }
}
