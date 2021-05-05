import {NotePreview} from './NotePreview.jsx' 
export function NoteList({ notes, onRemoveNote,onUpdateNote }) {
  return (
    <div className="note-list">
      { notes.map((note, idx) => <NotePreview note={note} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote} key={idx} />)}
    </div>
  )
}