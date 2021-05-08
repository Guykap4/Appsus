import { NotePreview } from './NotePreview.jsx'
export function NoteList({ notes, onRemoveNote, onUpdateNote, onPinned, onNoteColorChange, onRemoveTodo, onToggleDone, onAddTodo, onCopyToClipboard }) {

  function getHeadline() {
    if (!notes || notes.length === 0) return
    return notes[0].isPinned ? 'Pinned Notes' : 'Unpinned Notes';
  }



  return (
    <React.Fragment>
      <div className="headline">{getHeadline()}</div>
      <div className="note-list">
        {notes.map(note => <NotePreview
          onAddTodo={onAddTodo}
          onNoteColorChange={onNoteColorChange}
          onPinned={onPinned}
          onToggleDone={onToggleDone}
          onRemoveTodo={onRemoveTodo}
          onUpdateNote={onUpdateNote}
          onRemoveNote={onRemoveNote}
          onCopyToClipboard={onCopyToClipboard}
          note={note}
          key={note.id} />)}
      </div>
    </React.Fragment>
  )
}