export class NoteEdit extends React.Component {

    state = {
        val: '',
    }

    componentDidMount() {
        if (this.props.toDo) {
            this.setState({
                val: this.props.toDo,
            })
            return;
        }

        this.setState({
            val: this.props.note.info.caption
        })
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.value;
        this.setState({ [field]: val });
    }

    changeNote = () => {
        const val = this.state.val

        if (this.props.toDo) {
            const id = this.props.noteId;
            const idx = this.props.idx;
            this.props.onUpdateNote(id, val, idx)
            this.props.toggleEdit();
            return
        }

        const id = this.props.note.id;
        this.props.onUpdateNote(id, val);
        this.props.toggleEditNote();
    }

    render() {
        return (
            <div className="edit-caption">
                <input autoFocus type="text" name="val" value={this.state.val} onChange={this.handleChange} />
                <button onClick={this.changeNote}><img src="assets/img/v-icon.png" /></button>
            </div>
        )
    }
}