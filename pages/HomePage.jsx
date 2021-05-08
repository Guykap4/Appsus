const { NavLink } = ReactRouterDOM


export function HomePage() {

    return (
        <section>
            <div className="hero-img">
                <h2>Everything you need, for all devices. <span>MLD.</span></h2>
                <div className="hero-btn-container">
                    <NavLink to="/notes"><button>Notes</button></NavLink>
                    <NavLink to="/email"><button>Mail</button></NavLink>
                </div>
            </div>
        </section>
    )
}