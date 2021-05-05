export class EditNote extends React.Component {
    state = {
        id: '',
        title: '',
        type: '',
        url: '',
        content: ''
    }
    componentDidMount() {
        this.setState({
            id: this.props.note.id,
            title: this.props.note.title,
            type: this.props.note.type,
            url: this.props.note.url,
            content: this.props.note.content
        })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            ...prevState,
            [field]: value
        }))
    }
    urlPresent = () => {
        let url = this.state.url === '' ? true : false
        switch (url) {
            case true:
                return false
            case false:
                return <label>url<br />
                    < input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
                </label>
        }
    }
    saveNote = (ev) => {
        ev.preventDefault()
        this.props.onUpdateNote(this.state)
        this.props.updateToggle()
    }


    render() {
        const { id } = this.state
        return (
            <form className="note-edit" onSubmit={(ev) => this.saveNote(ev)}>
                <h1>{id ? 'Edit' : 'Add'} note</h1>
                <label>title<br />
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </label><br />
                <label>content<br />
                    <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                </label><br />
                {this.urlPresent()}<br />
                <button>Save</button>
            </form>
        )
    }
}