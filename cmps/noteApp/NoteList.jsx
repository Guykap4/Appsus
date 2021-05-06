import { NotePreview } from './NotePreview.jsx'
export function NoteList({ notes, onRemoveNote, onUpdateNote, onRemoveTodo, onToggleDone }) {
  return (
    <div className="note-list">
      {notes.map(note => <NotePreview
      onToggleDone={onToggleDone}
        onRemoveTodo={onRemoveTodo}
        onUpdateNote={onUpdateNote}
        onRemoveNote={onRemoveNote}
        note={note} key={note.id} />)}
    </div>
  )
}