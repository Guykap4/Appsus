import { NoteTxt } from './NoteTxt.jsx'
import {NoteImage} from './NoteImage.jsx' 
import {NoteVideo} from './NoteVideo.jsx' 
import {NoteToDo} from './NoteToDo.jsx' 
export function NotePreview({ note,onRemoveNote }) {

    function dynamicCmp() {
        switch (note.type) {
            case 'text':
                console.log('text');
                return <NoteTxt note={note} onRemoveNote={onRemoveNote}/>
            case 'image':
                console.log('image');
                return <NoteImage note = {note} onRemoveNote={onRemoveNote} />
            case 'todo':
                return <NoteToDo note = {note} onRemoveNote={onRemoveNote}/>
            case 'video':
                return <NoteVideo note = {note} onRemoveNote={onRemoveNote}/>
            default:
                return 'something went wrong'//...some default error view
        }
    }
    return (
        <div className="note-preview" >{dynamicCmp()}</div>
    )

}

