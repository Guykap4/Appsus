export class NoteTxt extends React.Component {
    removeEvent
    state = {
        note: ''
    }
    componentDidMount() {
        this.setState({ note: this.props }.note)
    }
    onRemove = () => {
        this.props.onRemoveNote(this.state.note.id)
    }

    render() {
        console.log(this.props);
        const { type, title, content,id } = this.state.note
        const {onRemoveNote } = this.props
        if (!this.state.note) return <div>Loading...</div>
        return (
            <div className="text-note">
                <span>type: {type} note</span><br />
                <span>title: {title}</span><br />
                <span>body: {content}</span><br />
                <button onClick={()=>{onRemoveNote(id)}}>remove</button>
                <button>update note</button>
            </div>
        )
    }
}
