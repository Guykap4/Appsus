import {NotePreview} from './NotePreview.jsx' 
export function NoteList({ notes, onRemoveNote, onUpdateNote, onPinned,onNoteColorChange }) {
  
  return (
    <div className="note-list">
      { notes.map(note => <NotePreview onNoteColorChange={onNoteColorChange} onPinned={onPinned}  onUpdateNote={onUpdateNote}  onRemoveNote={onRemoveNote} note={note} key={note.id} />)}
    </div>
  )
}