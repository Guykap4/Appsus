export function AppHeader() {

    const { Link } = ReactRouterDOM


    return (
        <header className="header">
            <div className="logo">LOGO</div>
            <div className="nav-icon">NAV ICON
            <Link to="/email">EMAIL</Link>
            <Link to="/notes">NOTES</Link>
            <Link to="/books">BOOKS</Link>
            </div>
        </header>
    )
}