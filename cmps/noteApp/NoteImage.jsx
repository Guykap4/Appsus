// export class NoteImage extends React.Component {
export function NoteImage({ note,onRemoveNote }) {


    const { type, title, url, content,id } = note
    return (
        <div className="image-note">
            <span>im {type}</span><br />
            <span>title: {title}</span><br />
            image: <img src={url} /><br />
            <span>content {content}</span><br />
            <button onClick={()=>{onRemoveNote(id)}}>remove</button>
            <button>update note</button>
        </div>
    )

}