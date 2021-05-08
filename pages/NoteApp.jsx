import { noteService } from '../services/notes.service.js'
import { eventBusService } from '../services/event-bus-service.js' 
import { AddNote } from '../cmps/noteApp/AddNote.jsx'
import { NoteList } from '../cmps/noteApp/NoteList.jsx'
import { SearchNote } from '../cmps/noteApp/SearchNote.jsx'


export class NoteApp extends React.Component {
    state = {
        notes: null,
        pinnedNotes: null,
        unpinnedNotes: null,
        searchBy: null,
    }

    componentDidMount() {
        this.loadNotes();
        eventBusService.on('emailToNote', (val) => {
            noteService.createNote('txtNote', val)
            console.log(val);
        })
    }

    loadNotes() {
        noteService.queryUnpinned(this.state.searchBy)
            .then(notes => {
                this.setState({
                    unpinnedNotes: notes
                })
            })

        noteService.queryPinned(this.state.searchBy)
            .then(notes => {
                this.setState({
                    pinnedNotes: notes
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
        eventBusService.emit('userMsg', 'Note Deleted!');
    }

    onUpdateNote = (id, val, idx) => {
        noteService.updateNote(id, val, idx);
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

    onAddTodo = (noteId) => {
        noteService.addTodo(noteId);
        this.loadNotes();
    }

    onSearch = (val) => {
        this.setState({
            searchBy: val
        }, this.loadNotes)
    }

    render() {
        return (
            <React.Fragment>
                <AddNote addNote={this.addNote} />
                <SearchNote onSearch={this.onSearch} />
                {this.state.pinnedNotes &&

                    <NoteList onAddTodo={this.onAddTodo}
                        onPinned={this.onPinnend}
                        onNoteColorChange={this.onNoteColorChange}
                        onToggleDone={this.onToggleDone}
                        onRemoveTodo={this.onRemoveTodo}
                        onUpdateNote={this.onUpdateNote}
                        onRemoveNote={this.onRemoveNote}
                        onCopyToClipboard={this.onCopyToClipboard}
                        notes={this.state.pinnedNotes} />}

                {this.state.unpinnedNotes &&

                    <NoteList
                        onAddTodo={this.onAddTodo}
                        onPinned={this.onPinnend}
                        onNoteColorChange={this.onNoteColorChange}
                        onToggleDone={this.onToggleDone}
                        onRemoveTodo={this.onRemoveTodo}
                        onUpdateNote={this.onUpdateNote}
                        onRemoveNote={this.onRemoveNote}
                        notes={this.state.unpinnedNotes}
                        onCopyToClipboard={this.onCopyToClipboard} />}
            </React.Fragment>
        )
    }
}