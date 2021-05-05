import { EditNote } from "./EditNote.jsx"
export class NoteTxt extends React.Component {
    im
    removeEvent
    state = {
        note: '',
        isEdit: false
    }
    componentDidMount() {
        this.setState({ note: this.props.note })
    }
    editNote = () => {
        this.setState({
            isEdit: !this.state.isEdit})
    }

    render() {
        // console.log(this.props);
        const { type, title, content, id } = this.state.note
        const { onRemoveNote } = this.props
        const { onUpdateNote } = this.props
        if (!this.state.note) return <div>Loading...</div>
        return (
            <div className="text-note">
                <span>type: {type} note</span><br />
                <span>title: {title}</span><br />
                <span>body: {content}</span><br />
                <button onClick={() => { onRemoveNote(id) }}>remove</button>
                <button onClick={() => { this.editNote() }}>update note</button>
                {this.state.isEdit && <EditNote note={this.state.note} onUpdateNote={onUpdateNote} updateToggle={this.editNote} />}
            </div>
        )
    }
}
