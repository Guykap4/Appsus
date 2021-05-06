import { ToDosPreview } from './ToDosPreview.jsx'

export function ToDosList({ note, onRemoveTodo, onToggleDone, onUpdateNote }) {
    const toDos = note.info.toDos;

    return (
        toDos.map((toDo, idx) => {
            return (
                <ToDosPreview
                    onUpdateNote={onUpdateNote}
                    onToggleDone={onToggleDone}
                    onRemoveTodo={onRemoveTodo}
                    toDo={toDo}
                    key={idx}
                    idx={idx}
                    note={note} />
            )
        })
    )
}