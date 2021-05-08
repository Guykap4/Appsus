const { NavLink } = ReactRouterDOM
import { emailService } from '../../services/email.service.js'
import { eventBusService } from '../../services/event-bus-service.js'


export class EmailSidebar extends React.Component {

    state = {
        unreadCount: 0,
        isMenuOpen: false,
    }

    componentDidMount() {
        this.setUnreadCount();
        eventBusService.on('readChange', () => {
            this.setUnreadCount();
        })

        eventBusService.on('toggleEmailMenu', () => {
            this.toggleSideBar();
        })
    }

    toggleSideBar = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
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
            <div className={`email-side-bar ${this.state.isMenuOpen ? 'menu-open' : ''}`}>
                <img className="close-email-menu-btn" onClick={this.toggleSideBar} src="./assets/img/x-icon.png" />
                <NavLink to="/email/edit"><button className="new-mail-btn"><span className="compose-plus">+</span> Compose</button></NavLink>
                <NavLink exact activeClassName="side-bar-active" to="/email"><div className="side-bar-nav"><span><img src="./assets/img/inbox-icon.png" />Inbox</span> <span className="count-span">{this.state.unreadCount > 0 && this.state.unreadCount}</span></div></NavLink>
                <NavLink><div className="side-bar-nav"><span><img src="./assets/img/star-icon.png" />Starred</span></div></NavLink>
                <NavLink><div className="side-bar-nav"><span><img src="./assets/img/sent-icon.png" />Sent Mail</span></div></NavLink>
            </div>
        )
    }
}
