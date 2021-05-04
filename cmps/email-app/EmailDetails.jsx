export function EmailDetails({ email, onDeleteEmail }) {



    return (
        <div className="email-details">
            <div className="email-header">
                <h2>{email.title}</h2>
                <div>
                    <button className="email-btn"><img src="./assets/img/edit-icon.png" /></button>
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