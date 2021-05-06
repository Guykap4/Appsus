import { NoteMenu } from "./NoteMenu.jsx"
import { NoteEdit } from './NoteEdit.jsx'

export class ImgNote extends React.Component {

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
        const { caption, url } = this.state.note.info
        return (
            <div className="img-note note">
                <div className="note-content">
                <img src={url} />
                {this.state.isEdit ?
                <NoteEdit toggleEditNote={this.toggleEditNote} note={this.state.note} onUpdateNote={this.props.onUpdateNote} /> :
                <div onClick={this.toggleEditNote}>{caption}</div> }
                </div>
               <NoteMenu onRemoveNote={this.props.onRemoveNote} note={this.state.note} />
            </div>
        )
    }
}
