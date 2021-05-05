import { noteService } from '../services/notes.service.js'
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
                this.setState({ notes }, () => {
                    console.log(this.state.notes);
                })
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
                <select>
                    <option value="image">image</option>
                    <option value="text">text</option>
                    <option value="todo">todos</option>
                    <option value="video">video</option>
                </select>
                {console.log(notes)}
                <NoteList notes={notes} onRemoveNote={this.onRemoveNote} onUpdateNote={this.onUpdateNote} />

            </section>
        )
    }
}