export function NoteVideo({ note,onRemoveNote }) {

    

    const { type, title, url, content, id } = note
    return (
        <div className="video-note">
            <span>im {type}</span><br />
            <span>title: {title}</span><br />
            <span>video: <video width="50" height="50" autoPlay muted>
                <source src={url} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video></span><br />
            <span>content {content}</span><br />
            <button onClick={()=>{onRemoveNote(id)}}>remove</button>
            <button>update note</button>
        </div>
    )

}