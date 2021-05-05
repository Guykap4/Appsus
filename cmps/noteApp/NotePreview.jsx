import { NoteTxt } from './NoteTxt.jsx'
import { NoteImage } from './NoteImage.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteToDo } from './NoteToDo.jsx'
export function NotePreview({ note, onRemoveNote, onUpdateNote }) {

    function dynamicCmp(type) {
        switch (type) {
            case 'text':
                // console.log('text');
                return <NoteTxt note={note} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote} />
            case 'image':
                // console.log('image');
                return <NoteImage note={note} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote}/>
            case 'todo':
                return <NoteToDo note={note} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote}/>
            case 'video':
                return <NoteVideo note={note} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote}/>
            default:
                return 'something went wrong'//...some default error view
        }
    }
    const {type} = note
    return (
        <div className="note-preview" >{dynamicCmp(type)}</div>
    )

}

