import { EditNote } from "./EditNote.jsx"
export class NoteVideo extends React.Component {
    state = {
        note: '',
        isEdit: false
    }
    componentDidMount() {
        this.setState({ note: this.props.note })
    }
    editNote = () => {
        this.setState({ isEdit: !this.state.isEdit })
    }

    render() {
        console.log(this.props);
        const { type, title, content, id,url } = this.state.note
        const { onRemoveNote } = this.props
        const { onUpdateNote } = this.props
        if (!this.state.note) return <div>Loading...</div>
        return (
            <div className="video-note">
                <span>im {type}</span><br />
                <span>title: {title}</span><br />
                <span>video: <video width="50" height="50" autoPlay muted>
                    <source src={url} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video></span><br />
                <span>content {content}</span><br />
                <button onClick={() => { onRemoveNote(id) }}>remove</button>
                <button onClick={() => { this.editNote() }}>update note</button>
                {this.state.isEdit && <EditNote note={this.state.note} onUpdateNote={onUpdateNote} />}
            </div>
        )
    }
}
