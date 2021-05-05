const { Link, NavLink } = ReactRouterDOM

export function AppMenu(props) {


    return (
        <div className="app-menu" >
            <NavLink activeClassName="active-icon" to="/email"><div className="app-menu-icon"><img src="./assets/img/email-app-icon.png" /></div></NavLink>
            <NavLink activeClassName="active-icon" to="/notes"><div className="app-menu-icon"><img src="./assets/img/note-app-icon.png" /></div></NavLink>
            <NavLink activeClassName="active-icon" to="/books"><div className="app-menu-icon"><img src="./assets/img/book-app-icon.png" /></div></NavLink>
        </div>
    )
}