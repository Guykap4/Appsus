export class NoteMenu extends React.Component {
    state = {
        note: null,
    }

    componentDidMount() {
        this.setState({
            note: this.props.note
        })
    }

    get NoteTypeIcon() {
        const { type } = this.props.note;
        let typeIconUrl;
        switch (type) {
            case 'txtNote':
                typeIconUrl = '../../assets/img/a-icon.png'
                break;

            case 'imgNote':
                typeIconUrl = '../../assets/img/img-icon.png'
                break;

            case 'vidNote':
                typeIconUrl = '../../assets/img/vid-icon.ico'
                break;

            case 'toDoNote':
                typeIconUrl = '../../assets/img/todo-icon.png'
                break;

            default:
                break;
        }
        return typeIconUrl;
    }

    render() {
        return (
            <div className="note-editor">
                <div className="note-type-icon"><img src={this.NoteTypeIcon} /></div>
                <div className="note-editor-icon"><img src="../../assets/img/pin-icon.png" /></div>
                {/* <div className="note-editor-icon"><img src="../../assets/img/edit-icon.png"/></div> */}
                <div className="note-editor-icon"><img src="../../assets/img/color-icon.png" /></div>
                <div className="note-editor-icon"><img src="../../assets/img/copy-icon.ico" /></div>
                <div onClick={() => this.props.onRemoveNote(this.state.note.id)} className="note-editor-icon"><img src="../../assets/img/trash-icon.png" /></div>
            </div>
        )
    }
}