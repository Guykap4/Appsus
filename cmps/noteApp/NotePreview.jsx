import { TxtNote } from './TxtNote.jsx'
import { ImgNote } from './ImgNote.jsx'
import { VidNote } from './VidNote.jsx'
import { ToDoNote } from './ToDoNote.jsx'

export function NotePreview({ note, onRemoveNote, onUpdateNote }) {

    function NoteTypePicker(type) {
        switch (type) {
            case 'txtNote':
                return <TxtNote onUpdateNote={onUpdateNote}  onRemoveNote={onRemoveNote} note={note} />
            case 'imgNote':
                return <ImgNote onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note}/>
            case 'toDoNote':
                return <ToDoNote onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note}/>
            case 'vidNote':
                return <VidNote onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note}/>
            default:
                console.log('something went wrong'); //...some default error view
        }
    }
    const { type } = note
    return (
        NoteTypePicker(type)
    )

}

