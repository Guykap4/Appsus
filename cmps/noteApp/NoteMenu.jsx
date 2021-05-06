export class NoteMenu extends React.Component {
    state = {
        note: null,
    }

    componentDidMount() {
        this.setState({
            note: this.props.note
        })
    }

    render() {
        return (
            <div className="note-editor">
                <div className="note-editor-icon"><img src="../../assets/img/pin-icon.png"/></div>
                <div className="note-editor-icon"><img src="../../assets/img/edit-icon.png"/></div>
                <div className="note-editor-icon"><img src="../../assets/img/color-icon.png"/></div>
                <div className="note-editor-icon"><img src="../../assets/img/copy-icon.ico"/></div>
                <div onClick={() => this.props.onRemoveNote(this.state.note.id)} className="note-editor-icon"><img src="../../assets/img/trash-icon.png"/></div>
            </div>
        )
    }
}