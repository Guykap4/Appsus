import { eventBusService } from '../../services/event-bus-service.js'

export class EmailFilter extends React.Component {
    state = {
        search: null,
        filter: null,
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState({ ...this.state, [field]: val }, () => {
            if (field === 'search') this.props.onSetSearch(this.state.search)
            if (field === 'filter') this.props.onSetFilter(this.state.filter)
        })
    }

    onToggleMenu() {
        eventBusService.emit('toggleEmailMenu');
    }

    render() {
        return (
            <div className="search-email">
                <img onClick={this.onToggleMenu} className="email-menu-btn" src="./assets/img/menu-icon.png" />
                <label htmlFor="text"><img src="./assets/img/search-icon.png" /></label>
                <input type="text" name="search" id="search" placeholder="search mail" onChange={this.handleChange} />
                <select name="filter" id="filter" onChange={this.handleChange}>
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">Unread</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
        )
    }
}