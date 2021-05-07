import { EmailDetails } from './EmailDetails.jsx'
import { emailService } from 'services/email.service.js' 
import { eventBusService } from 'services/event-bus-service.js'

export class EmailPreview extends React.Component {
    state = {
        isDetails: false,
        isRead: this.props.email.isRead,
    }

    componentDidMount(){
        this.state.isRead = this.props.email.isRead;
    }

    toggleDetails = () => {
        this.setState({ isDetails: !this.state.isDetails });
        this.makeRead();
        emailService.makeRead(this.props.email.id);
        eventBusService.emit('readChange');
    }

    makeRead = () => {
        this.setState({ isRead: true });
    }

    toggleRead = (ev) => {
        ev.stopPropagation();
        this.setState({ isRead: !this.state.isRead });
        emailService.toggleRead(this.props.email.id)
        eventBusService.emit('readChange');
    }

    emailTime = (time) => {
        const date = new Date(time);
        if (Date.now() - time < 86400000) return `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes()}`
        else if (Date.now() - time < 31556952000) return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`
        else return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
    }

    render() {
        
        const  { email, onDeleteEmail } = this.props;

        return (
            <React.Fragment>
                <div onClick={this.toggleDetails} className={`email-preview ${this.state.isRead && 'read'}`}>
                    <span onClick={this.toggleRead}><img src={email.isRead? "./assets/img/read-icon.png" : "./assets/img/unread-icon.png"} /></span>
                    <span>{email.sender}</span>
                    <span className="description-title-span">{email.title} - {email.content}</span>
                    <span>{this.emailTime(email.time)}</span>
                </div>
                {this.state.isDetails && <EmailDetails onDeleteEmail={onDeleteEmail} email={email} />}
            </React.Fragment>
        )
    }
}