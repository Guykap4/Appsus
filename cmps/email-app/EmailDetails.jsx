const { Link } = ReactRouterDOM

export function EmailDetails({ email, onDeleteEmail }) {

    return (
        <div className="email-details">
            <div className="email-header">
                <h2>{email.title}</h2>
                <div>
                <Link to={`/email/edit/${email.id}`}><button className="email-btn"><img src="./assets/img/reply-icon.jpg" /></button></Link>
                    <button className="email-btn"><img src="./assets/img/notes-icon.png" /></button>
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