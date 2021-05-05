const { Route, Switch, Link, NavLink } = ReactRouterDOM
import { emailService } from '../../services/email.service.js'
import { eventBusService } from '../../services/event-bus-service.js'


export class EmailSidebar extends React.Component {

    state = {
        unreadCount: 0,
    }

    componentDidMount() {
        this.setUnreadCount();
        eventBusService.on('readChange', () => {
            this.setUnreadCount();
        })
    }

    setUnreadCount() {
        const count = emailService.getUnreadCount()
        this.setState({
            unreadCount: count
        })
    }

    render() {
        return (
            <div className="email-side-bar">
                <NavLink to="/email/edit"><button className="new-mail-btn"><span className="compose-plus">+</span> Compose</button></NavLink>
                <NavLink exact activeClassName="side-bar-active" to="/email"><span>Inbox</span><span>{this.state.unreadCount}</span></NavLink>
                <NavLink><span>Starred</span></NavLink>
                <NavLink><span>Sent Mail</span></NavLink>
            </div>
        )
    }
}
