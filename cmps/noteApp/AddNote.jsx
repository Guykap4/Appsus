export class AddNote extends React.Component {
    state = {
        type: 'txtNote',
        val: '',
    }

    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }

    onSetNoteType = (ev) => {
        const value = ev.target.value;
        this.setState({
            type: value
        })
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.value;
        this.setState({ [field]: val })
    }

    onAddNote = () => {
        const type = this.state.type;
        const val = this.state.val;
        this.props.addNote(type, val)
        this.setState({
            val: '',
        })
    }

    render() {
        return (
            <div className="container">
                <section className="add-note-container">

                    <img onClick={this.onAddNote} className="left-border-radius" src="../../assets/img/plus-icon.png" />

                    <input ref={this.inputRef} className="left-border-radius" type="text" name="val" id="val"
                        onChange={this.handleChange} value={this.state.val} />

                    <form>
                        <input checked={this.state.type === 'txtNote'} onChange={this.onSetNoteType} type="radio"
                            name="val" value="txtNote" id="txt" hidden />
                        <label htmlFor="txt"><img src="../../assets/img/a-icon.png" /></label>

                        <input checked={this.state.type === 'imgNote'} onChange={this.onSetNoteType} type="radio"
                            name="val" value="imgNote" id="img" hidden />
                        <label htmlFor="img"><img src="../../assets/img/img-icon.png" /></label>

                        <input checked={this.state.type === 'vidNote'} onChange={this.onSetNoteType} type="radio"
                            name="val" value="vidNote" id="vid" hidden />
                        <label htmlFor="vid"><img src="../../assets/img/vid-icon.ico" /></label>

                        <input checked={this.state.type === 'toDoNote'} onChange={this.onSetNoteType} type="radio"
                            name="val" value="toDoNote" id="todo" hidden />
                        <label htmlFor="todo"><img className="right-border-radius"
                            src="../../assets/img/todo-icon.png" /></label>
                    </form>
                </section>
            </div>
        )
    }
}