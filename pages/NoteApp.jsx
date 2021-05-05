import { noteService } from '../services/notes.service.js'
import { NoteInput } from '../cmps/noteApp/InputNote.jsx'
import { NoteList } from '../cmps/noteApp/NoteList.jsx'

export class NoteApp extends React.Component {
    state = {
        notes: '',
        filterBy: {
            type: '',

        },
    }

    componentDidMount() {

        this.loadNotes()
    }
    loadNotes() {
        noteService.query()
            .then((notes) => {
                this.setState({ notes })
            })
    }
    onRemoveNote= (id)=> {
        noteService.removeNote(id)
        this.loadNotes()
    }
    onUpdateNote = (note) => {
        noteService.saveNote(note)
        this.loadNotes()
    }

    render() {
        const { notes } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <section className="note-app">
                <NoteInput onUpdateNote={this.onUpdateNote}/>
                <NoteList notes={notes} onRemoveNote={this.onRemoveNote} onUpdateNote={this.onUpdateNote} />

            </section>
        )
    }
}