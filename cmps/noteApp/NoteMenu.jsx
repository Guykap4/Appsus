import { ColorPickerPallet } from "./ColorPickerPallet.jsx"
export class NoteMenu extends React.Component {
    state = {
        note: null,
        isPickerOpen: false,
    }
    componentDidMount() {
        this.setState({
            note: this.props.note
        })
    }

    toggleColorpicker = () => {
        this.setState({ isPickerOpen: !this.state.isPickerOpen })
    }

    get NoteTypeIcon() {
        const { type } = this.props.note;
        let typeIconUrl;
        switch (type) {
            case 'txtNote':
                typeIconUrl = 'assets/img/a-icon.png'
                break;

            case 'imgNote':
                typeIconUrl = 'assets/img/img-icon.png'
                break;

            case 'vidNote':
                typeIconUrl = 'assets/img/vid-icon.ico'
                break;

            case 'toDoNote':
                typeIconUrl = 'assets/img/todo-icon.png'
                break;

            default:
                break;
        }
        return typeIconUrl;
    }


    copyToClipboard = () => {
        const { id } = this.state.note
        this.props.onCopyToClipboard(id)

    }

    render() {
        if (!this.state.note) return <div>Loading...</div>
        return (
            <div className="note-editor">
                <div className="note-type-icon"><img src={this.NoteTypeIcon} /></div>
                <div onClick={() => { this.props.onPinned(this.state.note.id) }} className={`note-editor-icon ${this.state.note.isPinned ? 'pinned' : ''}`}><img src="assets/img/pin-icon.png" /></div>
                <div onClick={() => { this.toggleColorpicker() }} className="note-editor-icon"><img src="assets/img/color-icon.png" /></div>
                    {this.state.isPickerOpen && <ColorPickerPallet onNoteColorChange={this.props.onNoteColorChange} toggleColorpicker={this.toggleColorpicker} noteId={this.state.note.id} />}
                <div onClick={() => { this.copyToClipboard() }} className="note-editor-icon"><img src="assets/img/copy-icon.ico" /></div>
                <div onClick={() => this.props.onRemoveNote(this.state.note.id)} className="note-editor-icon"><img src="assets/img/trash-icon.png" /></div>
            </div>
        )
    }
}