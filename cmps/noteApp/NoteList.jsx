import { NotePreview } from './NotePreview.jsx'
export function NoteList({ notes, onRemoveNote, onUpdateNote, onPinned, onNoteColorChange, onRemoveTodo, onToggleDone, onAddTodo }) {

  return (
    <div className="note-list">
      {notes.map(note => <NotePreview
        onAddTodo={onAddTodo}
        onNoteColorChange={onNoteColorChange}
        onPinned={onPinned}
        onToggleDone={onToggleDone}
        onRemoveTodo={onRemoveTodo}
        onUpdateNote={onUpdateNote}
        onRemoveNote={onRemoveNote}
        note={note}
        key={note.id} />)}
    </div>
  )
}