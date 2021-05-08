const { NavLink } = ReactRouterDOM

export function AppMenu({ toggleMenu }) {


    return (
        <div className="app-menu" >
            <NavLink onClick={toggleMenu} activeClassName="active-icon" to="/email"><div className="app-menu-icon"><img src="./assets/img/email-app-icon.png" /></div></NavLink>
            <NavLink onClick={toggleMenu} activeClassName="active-icon" to="/notes"><div className="app-menu-icon"><img src="./assets/img/note-app-icon.png" /></div></NavLink>
        </div>
    )
}