export class NoteEdit extends React.Component {

    state = {
        val: '',
    }

    componentDidMount() {
        this.setState({
            val: this.props.note.info.caption
        })
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.value;
        this.setState({ [field]: val })
    }

    changeNote = () => {
        const val = this.state.val
        const id = this.props.note.id
        this.props.onUpdateNote(id, val)
        this.props.toggleEditNote();
    }
    


    render() {
        return (
            <div className="edit-caption">
                <input type="text" name="val" value={this.state.val} onChange={this.handleChange} />
                <button onClick={this.changeNote}><img src="../../assets/img/v-icon.png" /></button>
            </div>
        )
    }
}