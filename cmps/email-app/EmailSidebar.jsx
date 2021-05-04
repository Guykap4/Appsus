export class EmailSidebar extends React.Component {

    state = {
    
    }

    render() {
        return (
            <div className="email-side-bar">
                <button className="new-mail-btn"><span className="compose-plus">+</span> Compose</button>
                <span>Inbox</span>
                <span>Starred</span>
                <span>Sent Mail</span>
            </div>
        )
    }
}