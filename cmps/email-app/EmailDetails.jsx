import { eventBusService } from "../../services/event-bus-service.js" 
const { Link } = ReactRouterDOM

export function EmailDetails({ email, onDeleteEmail }) {

    function onEmailToNote() {
        eventBusService.emit('emailToNote', `${email.sender}: ${email.content}`)
        eventBusService.emit('userMsg', 'Note Created!')
    }

    return (
        <div className="email-details">
            <div className="email-header">
                <h2>{email.title}</h2>
                <div>
                <Link to={`/email/edit/${email.id}`}><button className="email-btn"><img src="./assets/img/reply-icon.jpg" /></button></Link>
                    <button onClick={() => onEmailToNote()} className="email-btn"><img src="./assets/img/notes-icon.png" /></button>
                    <button onClick={() => onDeleteEmail(email.id)} className="email-btn"><img src="./assets/img/trash-icon.png" /></button>
                </div>
            </div>
            <h3>{email.sender}</h3>
            <div >
                <div className="email-details-content">{email.content}</div>
            </div>
        </div>
    )
}