const { Route, Switch, Link } = ReactRouterDOM

import { emailService } from '../services/email.service.js'
import { EmailList } from '../cmps/email-app/EmailList.jsx'
import { EmailEdit } from '../cmps/email-app/EmailEdit.jsx'
import { EmailSidebar } from '../cmps/email-app/EmailSidebar.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy)
            .then(emails => {
                this.setState({ emails: emails }, () => console.log(this.state))
            })
    }

    onDeleteEmail = (id) => {
        emailService.deleteEmail(id)
        console.log('deleted!');
        this.loadEmails();
    }

    onAddEmail = ({ to, subject, content }) => {
        emailService.addEmail(to, subject, content)
        console.log('added!');
        this.loadEmails();
    }

    onSetFilter = (filterBy) => {
        this.setState({filterBy}, this.loadEmails)
    }

    render() {

        const { emails } = this.state

        if (!this.state.emails) return 'Loading...'

        return (
            <section className="email-app-container">
                <EmailSidebar />
                <div className="email-content">
                    <Switch>
                        <Route path="/email/edit" render={(props)=> <EmailEdit {...props} onAddEmail={this.onAddEmail} />} />
                        <Route path="/email" render={(props)=> <EmailList {...props} onSetFilter={this.onSetFilter}  onDeleteEmail={this.onDeleteEmail} emails={emails} />} />
                    </Switch>
                </div>
            </section>
        )
    }
}