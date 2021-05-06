import { NoteMenu } from "./NoteMenu.jsx"
import { NoteEdit } from './NoteEdit.jsx'

export class TxtNote extends React.Component {
    state = {
        note: null,
        isEdit: false,
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    toggleEditNote = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }


    render() {
        if (!this.state.note) return <div>Loading...</div>
        const caption = this.state.note.info.caption;
        return (
            <div style={{ backgroundColor: this.state.note.color }} className="txt-note note">
                <div className="note-content">
                    {this.state.isEdit ?
                        <NoteEdit toggleEditNote={this.toggleEditNote} note={this.state.note} onUpdateNote={this.props.onUpdateNote} /> :
                        <div onClick={this.toggleEditNote}>{caption}</div>}
                </div>
                <NoteMenu onNoteColorChange={this.props.onNoteColorChange} onPinned={this.props.onPinned} onRemoveNote={this.props.onRemoveNote} onCopyToClipboard={this.props.onCopyToClipboard} note={this.state.note} />
            </div>
        )
    }
}