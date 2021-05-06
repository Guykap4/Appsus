import { NoteEdit } from "./NoteEdit.jsx";

export class ToDosPreview extends React.Component {
    state = {
        isEdit: false,
    }

    toggleEdit = () => {
        this.setState({
        isEdit: !this.state.isEdit
        })
    }

    render() {

        const { toDo, isDone } = this.props.toDo;
        const { idx, onToggleDone, onUpdateNote } = this.props
        const noteId = this.props.note.id;
        
        return (
            <React.Fragment>
            {this.state.isEdit? <NoteEdit onUpdateNote={onUpdateNote} toggleEdit={this.toggleEdit} toDo={toDo} idx={idx} noteId={noteId} /> : <div className={isDone ? 'checked' : ''}>
                <img onClick={() => {onToggleDone(idx, noteId) }} src={`../../assets/img/${isDone ? 'checked-square-icon' : 'square-icon'}.png`} />
                <span onClick={this.toggleEdit}>{toDo}</span>
                <button onClick={(ev) => {
                    ev.stopPropagation();
                    this.props.onRemoveTodo(idx, this.props.note.id)
                }}>X</button>
            </div>}
            </React.Fragment>
        )
    }
}