import { emailService } from '../services/email.service.js'
import { EmailList } from '../cmps/email-app/EmailList.jsx'
import { EmailFilter } from '../cmps/email-app/EmailFilter.jsx'
import { EmailSidebar } from '../cmps/email-app/EmailSidebar.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = (filterBy) => {
        emailService.query(filterBy)
            .then(emails => {
                this.setState({ emails: emails }, () => console.log(this.state))
            })
    }

    onDeleteEmail = (id) => {
        emailService.deleteEmail(id)
        console.log('deleted!');
        this.loadEmails();
    }

    render() {

        const { emails } = this.state

        if (!this.state.emails) return 'Loading...'

        return (
            <section className="email-app-container">
                <EmailSidebar />
                <div className="email-content">
                    <EmailFilter />
                    <EmailList onDeleteEmail={this.onDeleteEmail} emails={emails} />
                    {(!emails || emails.length === 0 ) && <div className="no-emails">No Emails to show...</div>}
                </div>
            </section>
        )
    }
}