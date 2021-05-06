import { noteService } from '../services/notes.service.js'
import { AddNote } from '../cmps/noteApp/AddNote.jsx'
import { NoteList } from '../cmps/noteApp/NoteList.jsx'

export class NoteApp extends React.Component {
    state = {
        notes: null,
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes() {
        noteService.query()
            .then(notes => {
                this.setState({
                    notes: notes
                })
            })
    }

    addNote = (type, val) => {
        noteService.createNote(type, val)
        this.loadNotes();
    }

    onRemoveNote = (id) => {
        noteService.removeNote(id)
        this.loadNotes();
    }

    onUpdateNote = (id, val) => {
        noteService.updateNote(id, val);
        this.loadNotes();
    }
    onPinnend = (id) => {
        noteService.togglePinned(id)
        this.loadNotes()
    }
    onNoteColorChange = (id, color) => {
        noteService.noteColorChange(id, color)
        this.loadNotes()
    }

    onRemoveTodo = (toDoIdx, NoteId) => {
        noteService.removeTodo(toDoIdx, NoteId);
        this.loadNotes();
    }

    onToggleDone = (toDoIdx, NoteId) => {
        noteService.toggleDone(toDoIdx, NoteId);
        this.loadNotes();
    }
    onCopyToClipboard = (txt) => {
        noteService.copyToClipboard(txt)
        this.loadNotes()
    }

    render() {
        return (
            <React.Fragment>
                <AddNote addNote={this.addNote} />
                {this.state.notes &&
                    <NoteList
                        onPinned={this.onPinnend}
                        onNoteColorChange={this.onNoteColorChange}
                        onToggleDone={this.onToggleDone}
                        onRemoveTodo={this.onRemoveTodo}
                        onUpdateNote={this.onUpdateNote}
                        onRemoveNote={this.onRemoveNote}
                        onCopyToClipboard={this.onCopyToClipboard}
                        notes={this.state.notes} />}
            </React.Fragment>

        )
    }
}