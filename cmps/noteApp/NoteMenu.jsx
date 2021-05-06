import { ColorPickerPallet } from "./ColorPickerPallet.jsx"
export class NoteMenu extends React.Component {
    state = {
        note: null,
        isPickerOpen:false
    }

    componentDidMount() {
        this.setState({
            note: this.props.note
        })
    }
    toggleColorpicker = () => {
        this.setState({isPickerOpen:!this.state.isPickerOpen})
    }
    render() {
        return (
            <div className="note-editor">
                <div onClick={()=>{this.props.onPinned(this.state.note.id)}} className="note-editor-icon"><img src="../../assets/img/pin-icon.png"/></div>
                <div className="note-editor-icon"><img src="../../assets/img/edit-icon.png"/></div>
                <div onClick={() => { this.toggleColorpicker() }} className="note-editor-icon"><img src="../../assets/img/color-icon.png" /></div>
                {this.state.isPickerOpen && <ColorPickerPallet onNoteColorChange={this.props.onNoteColorChange} toggleColorpicker={this.toggleColorpicker} noteId={ this.state.note.id}/>}
                <div className="note-editor-icon"><img src="../../assets/img/copy-icon.ico"/></div>
                <div onClick={() => this.props.onRemoveNote(this.state.note.id)} className="note-editor-icon"><img src="../../assets/img/trash-icon.png"/></div>
            </div>
        )
    }
}