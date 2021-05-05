import { EmailFilter } from './EmailFilter.jsx'
import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onDeleteEmail, onSetSearch, onSetFilter }) {
    return (
        <React.Fragment>
            <EmailFilter onSetSearch={onSetSearch} onSetFilter={onSetFilter}  />
            {(!emails || emails.length === 0) && <div className="no-emails">No Emails to show...</div>}
            {emails.length > 0 && <section className="email-list">
                {emails.map(email => <EmailPreview onDeleteEmail={onDeleteEmail} email={email} key={email.id} />)}
            </section>}
        </React.Fragment>
    )
}