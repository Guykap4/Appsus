import { eventBusService } from "../services/event-bus-service.js"

export class UserMsg extends React.Component {
    state = {
        msg: null,
    }

    componentDidMount() {
        eventBusService.on('userMsg', (msg) => {
            this.showUserMsg(msg)
        })
    }

    showUserMsg(msg) {
        this.setState({ msg }, () => setTimeout(this.clearUserMsg, 1500))
    }

    clearUserMsg = () => {
        this.setState({
            msg: null
        })
    }

    render() {
        return (
            <div className={`user-msg ${this.state.msg ? "" : "no-display"}`} >
                <div>{this.state.msg}</div>
            </div >
        )
    }
}