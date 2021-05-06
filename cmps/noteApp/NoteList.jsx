import {NotePreview} from './NotePreview.jsx' 
export function NoteList({ notes,  onRemoveNote, onUpdateNote }) {
  return (
    <div className="note-list">
      { notes.map(note => <NotePreview onUpdateNote={onUpdateNote}  onRemoveNote={onRemoveNote} note={note} key={note.id} />)}
    </div>
  )
}