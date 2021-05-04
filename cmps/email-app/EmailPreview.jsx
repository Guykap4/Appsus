import { EmailDetails } from './EmailDetails.jsx'

export class EmailPreview extends React.Component {
    state = {
        isDetails: false,
        isRead: false,
    }

    getMsgLength() {
        if (window.matchMedia('(min-width: 1800px)').matches) return 110
        if (window.matchMedia('(min-width: 1500px)').matches) return 90
        if (window.matchMedia('(min-width: 1350px)').matches) return 75
        if (window.matchMedia('(min-width: 1200px)').matches) return 60
        if (window.matchMedia('(min-width: 1070px)').matches) return 50
        if (window.matchMedia('(min-width: 980px)').matches) return 45
        if (window.matchMedia('(min-width: 900px)').matches) return 40
        if (window.matchMedia('(min-width: 600px)').matches) return 20
    }

    componentDidMount(){
        this.state.isRead = this.props.email.isRead;
    }

    toggleDetails = () => {
        this.setState({ isDetails: !this.state.isDetails });
        this.makeRead();
    }

    makeRead = () => {
        this.setState({ isRead: true });
    }

    toggleRead = (ev) => {
        ev.stopPropagation();
        this.setState({ isRead: !this.state.isRead });
    }

    render() {

        const  { email, onDeleteEmail } = this.props;

        return (
            <React.Fragment>
                <div onClick={this.toggleDetails} className={`email-preview ${this.state.isRead && 'read'}`}>
                    <span onClick={this.toggleRead}><img src="./assets/img/read-icon.png" /></span>
                    <span>{email.sender}</span>
                    <span>{email.title} - {email.content.slice(0, this.getMsgLength())}...</span>
                    <span>{email.time}</span>
                </div>
                {this.state.isDetails && <EmailDetails onDeleteEmail={onDeleteEmail} email={email} />}
            </React.Fragment>
        )
    }
}