import { AppMenu } from './AppMenu.jsx'
import { UserMsg } from './UserMsg.jsx'
const { Link } = ReactRouterDOM

export class AppHeader extends React.Component {

    state = {
        isMenuShown: false,
    }

    toggleMenu = () => {
        this.setState({
            isMenuShown: !this.state.isMenuShown,
        })
    }

    render() {
        return (
            <header className="header">
                <Link to="/"><div className="logo">LOGO</div></Link>
                <div onClick={this.toggleMenu} className="nav-icon"><img src="./assets/img/app-menu-icon.png" /></div>
                {this.state.isMenuShown && <AppMenu toggleMenu={this.toggleMenu} />}
                <UserMsg />
            </header>
        )
    }
}