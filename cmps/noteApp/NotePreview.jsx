import { TxtNote } from './TxtNote.jsx'
import { ImgNote } from './ImgNote.jsx'
import { VidNote } from './VidNote.jsx'
import { ToDoNote } from './ToDoNote.jsx'

export function NotePreview({ note, onRemoveNote, onUpdateNote, onPinned, onNoteColorChange, onRemoveTodo, onToggleDone, onAddTodo, onCopyToClipboard }) {

    function NoteTypePicker(type) {
        switch (type) {
            case 'txtNote':
                return <TxtNote
                    onCopyToClipboard={onCopyToClipboard}
                    onNoteColorChange={onNoteColorChange}
                    onPinned={onPinned}
                    onUpdateNote={onUpdateNote}
                    onRemoveNote={onRemoveNote}
                    note={note} />
            case 'imgNote':
                return <ImgNote
                    onCopyToClipboard={onCopyToClipboard}
                    onNoteColorChange={onNoteColorChange}
                    onPinned={onPinned}
                    onUpdateNote={onUpdateNote}
                    onRemoveNote={onRemoveNote}
                    note={note} />
            case 'toDoNote':
                return <ToDoNote
                    onCopyToClipboard={onCopyToClipboard}
                    onNoteColorChange={onNoteColorChange}
                    onPinned={onPinned}
                    onAddTodo={onAddTodo}
                    onUpdateNote={onUpdateNote}
                    onRemoveNote={onRemoveNote}
                    onToggleDone={onToggleDone}
                    onRemoveTodo={onRemoveTodo}
                    note={note} />
            case 'vidNote':
                return <VidNote
                    onCopyToClipboard={onCopyToClipboard}
                    onNoteColorChange={onNoteColorChange}
                    onPinned={onPinned} onUpdateNote={onUpdateNote}
                    onRemoveNote={onRemoveNote}
                    note={note} />
            default:
                console.log('something went wrong'); //...some default error view
        }
    }
    const { type } = note

    return (
        NoteTypePicker(type)
    )

}

