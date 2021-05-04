export function NoteToDo({ note,onRemoveNote }) {


    const { type, title, content ,id} = note
    return (
        <div className="todo-note">
            <span>im {type}</span><br />
            <span>title: {title}</span><br />
            todo list:{content} <br />
            <span>content {content}</span><br />
            <button onClick={()=>{onRemoveNote(id)}}>remove</button>
            <button>update note</button>
        </div>
    )

}