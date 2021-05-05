import { EditNote } from "./EditNote.jsx"
export class NoteImage extends React.Component {
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
        const { type, title, content, id, url } = this.state.note
        const { onRemoveNote } = this.props
        const { onUpdateNote } = this.props
        if (!this.state.note) return <div>Loading...</div>
        return (
            <div className="image-note">
                <span>im {type}</span><br />
                <span>title: {title}</span><br />
            image: <img src={url} /><br />
                <span>content {content}</span><br />
                <button onClick={() => { onRemoveNote(id) }}>remove</button>
                <button onClick={() => { this.editNote() }}>update note</button>
                {this.state.isEdit && <EditNote note={this.state.note} onUpdateNote={onUpdateNote} />}
            </div>
        )
    }
}
