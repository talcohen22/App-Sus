const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    return (
        <header className="app-header">
            <Link to="/">
                <img src="./assets/img/app/workspace_logo.svg.png" alt="workspace_logo" />
            </Link>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/mail/inbox">Mail</NavLink>
                <NavLink to="/note">Note</NavLink>
            </nav>
        </header>
    )
}
