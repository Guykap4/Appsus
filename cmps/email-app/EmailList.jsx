import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onDeleteEmail }) {

    return (
        <section className="email-list">
            {emails.map(email => <EmailPreview onDeleteEmail={onDeleteEmail} email={email} key={email.id} />)}
        </section>
    )
}