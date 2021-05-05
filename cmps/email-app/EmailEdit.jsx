export class EmailEdit extends React.Component {

    state = {
        filterBy: {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            content: '',
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState({ filterBy: { ...this.state.filterBy, [field]: val } })
    }

    getEmail = () => {
        this.props.onAddEmail(this.state.filterBy);
        this.setState({
            filterBy: {
                to: '',
                cc: '',
                bcc: '',
                subject: '',
                content: '',
            }
        })
        this.props.history.push('/email')
    }

    goBack = () => {
        this.props.history.push('/email')
    }

    render() {

        const { to, cc, bcc, subject, content } = this.state

        return (
                <div className="new-email-container">
                    <div className="compose-header">
                        <h2>New Massage</h2>
                        <button className="close-add-btn" onClick={this.goBack}>X</button>
                    </div>
                    <form className="edit-email-form">
                        <label htmlFor="to"></label>
                        <input type="text" id="to" name="to" value={to} onChange={this.handleChange} required placeholder="To:" />
                        <label htmlFor="cc"></label>
                        <input type="text" id="cc" name="cc" value={cc} onChange={this.handleChange} placeholder="Cc:" />
                        <label htmlFor="bcc"></label>
                        <input type="text" id="bcc" name="bcc" value={bcc} onChange={this.handleChange} placeholder="Bcc:" />
                        <label htmlFor="subject"></label>
                        <input type="text" id="subject" name="subject" value={subject} onChange={this.handleChange} required placeholder="Subject:" />
                        <label htmlFor="content"></label>
                        <textarea id="content" name="content" value={content} onChange={this.handleChange} />
                        <button className="send-add-btn" onClick={(ev) => {
                            ev.preventDefault()
                            this.getEmail()
                        }}>Send</button>
                    </form>
                </div>
        )
    }
}