import {NotePreview} from './NotePreview.jsx' 
export function NoteList({ notes, onRemoveNote }) {
  return (
    <div className="note-list">
      { notes.map((note,idx) => <NotePreview note={note} onRemoveNote={onRemoveNote} key={idx} />)}
    </div>
  )
}