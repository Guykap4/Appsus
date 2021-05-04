export class EditNote extends React.Component {
    state = {
        note: '',
        title: '',
        content: '',

    }
    componentDidMount() {
        this.setState({ note: this.props.note })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            ...prevState,
            [field]: value
        }))
    }


    render() {
        const { id } = this.state.note
        return (
            <form className="note-edit" onSubmit={this.onSaveNote}>
                <h1>{id ? 'Edit' : 'Add'} note</h1>
                <label>title
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </label>
                <label>content
          <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                </label>
                <button>Save</button>
            </form>
        )
    }
}