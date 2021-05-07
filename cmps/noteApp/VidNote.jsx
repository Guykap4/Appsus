import { NoteMenu } from "./NoteMenu.jsx"
import { NoteEdit } from './NoteEdit.jsx'

export class VidNote extends React.Component {
    state = {
        note: '',
        isEdit: false
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
        const { caption, url } = this.state.note.info
        return (
            <div style={{backgroundColor: this.state.note.color}} className="vid-note note">
                <div className="note-content">
                    <iframe width="250" height="200" src={url} title="YouTube video player"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    {this.state.isEdit ? 
                        <NoteEdit toggleEditNote={this.toggleEditNote} note={this.state.note}
                            onUpdateNote={this.props.onUpdateNote} /> :
                     <div onClick={this.toggleEditNote}>{caption}</div>}
                </div>
                <NoteMenu onNoteColorChange={this.props.onNoteColorChange} onPinned={this.props.onPinned}
                    onRemoveNote={this.props.onRemoveNote} onCopyToClipboard={this.props.onCopyToClipboard}
                    note={this.state.note} />
            </div>
        )
    }
}
