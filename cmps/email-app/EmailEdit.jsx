import { emailService } from '../../services/email.service.js'
import { eventBusService } from '../../services/event-bus-service.js'

export class EmailEdit extends React.Component {

    state = {
        mail: {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            content: '',
        },
        id: null,
    }

    componentDidMount() {
        const id = this.props.match.params.emailid;
        if (id) {
            const mail = emailService.getEmailById(id)
            if (!mail) this.props.history.push('/email')
            this.setState(prevState => ({ ...prevState, mail: {
                to: mail.sender,
                cc: '',
                bcc: '',
                subject: `Re: ${mail.title}`,
                content: mail.content,
            } }))
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState({ mail: { ...this.state.mail, [field]: val } })
    }

    sendEmail = () => {
        const id = this.props.match.params.emailid;
        if (!id) this.props.onAddEmail(this.state.mail);
        else this.props.onUpdateEmail(this.state.mail, id);
        this.setState({
            mail: {
                to: '',
                cc: '',
                bcc: '',
                subject: '',
                content: '',
            }
        })
        
        this.props.history.push('/email')
        eventBusService.emit('readChange');
        eventBusService.emit('userMsg', 'Mail Sent!');
    }

    goBack = () => {
        this.props.history.push('/email')
    }

    render() {
        return (
            <div className="new-email-container">
                <div className="compose-header">
                    <h2>New Message</h2>
                    <button className="close-add-btn" onClick={this.goBack}>X</button>
                </div>
                <form className="edit-email-form">
                    <label htmlFor="to"></label>
                    <input type="text" id="to" name="to" value={this.state.mail.to} onChange={this.handleChange} required placeholder="To:" />
                    <label htmlFor="cc"></label>
                    <input type="text" id="cc" name="cc" value={this.state.mail.cc} onChange={this.handleChange} placeholder="Cc:" />
                    <label htmlFor="bcc"></label>
                    <input type="text" id="bcc" name="bcc" value={this.state.mail.bcc} onChange={this.handleChange} placeholder="Bcc:" />
                    <label htmlFor="subject"></label>
                    <input type="text" id="subject" name="subject" value={this.state.mail.subject} onChange={this.handleChange} required placeholder="Subject:" />
                    <label htmlFor="content"></label>
                    <textarea id="content" name="content" value={this.state.mail.content} onChange={this.handleChange} />
                    <button className="send-add-btn" onClick={(ev) => {
                        ev.preventDefault()
                        this.sendEmail()
                    }}>Send</button>
                </form>
            </div>
        )
    }
}