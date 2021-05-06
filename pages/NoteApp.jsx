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

    render() {
        return (
            <React.Fragment>
                <AddNote addNote={this.addNote} />
                {this.state.notes && <NoteList onUpdateNote={this.onUpdateNote}  onRemoveNote={this.onRemoveNote} notes={this.state.notes} />}
            </React.Fragment>

        )
    }
}