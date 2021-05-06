import { TxtNote } from './TxtNote.jsx'
import { ImgNote } from './ImgNote.jsx'
import { VidNote } from './VidNote.jsx'
import { ToDoNote } from './ToDoNote.jsx'

export function NotePreview({ note, onRemoveNote, onUpdateNote, onPinned, onNoteColorChange, onRemoveTodo, onToggleDone,onCopyToClipboard }) {

    function NoteTypePicker(type) {
        switch (type) {
            case 'txtNote':
                return <TxtNote onNoteColorChange={onNoteColorChange} onPinned={onPinned} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} onCopyToClipboard={onCopyToClipboard} note={note} />
            case 'imgNote':
                return <ImgNote onNoteColorChange={onNoteColorChange} onPinned={onPinned} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} onCopyToClipboard={onCopyToClipboard} note={note} />
            case 'toDoNote':
                return <ToDoNote onNoteColorChange={onNoteColorChange} onPinned={onPinned} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} onToggleDone={onToggleDone} onRemoveTodo={onRemoveTodo} onCopyToClipboard={onCopyToClipboard} note={note} />
            case 'vidNote':
                return <VidNote onNoteColorChange={onNoteColorChange} onPinned={onPinned} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} onCopyToClipboard={onCopyToClipboard} note={note} />
            default:
                console.log('something went wrong'); //...some default error view
        }
    }
    const { type } = note

    return (
        NoteTypePicker(type)
    )

}

