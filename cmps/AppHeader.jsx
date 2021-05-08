import { AppMenu } from './AppMenu.jsx'

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
                <div className="logo">MLD</div>
                <div onClick={this.toggleMenu} className="nav-icon"><img src="./assets/img/app-menu-icon.png" /></div>
                {this.state.isMenuShown && <AppMenu />}
            </header>
        )
    }
}