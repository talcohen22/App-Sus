const { Link, NavLink } = ReactRouterDOM
const { useState, useEffect } = React

export function AppHeader() {
    const [screenSize, setScreenSize] = useState('small') // Default to small screen

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setScreenSize('large')
            } else {
                setScreenSize('small')
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header className="app-header">
            <Link to="/">
                {screenSize === 'small' && (
                    <img
                        className="main-logo logo"
                        src="./assets/img/app/small-google.png"
                        alt="Small Logo"
                    />
                )}
                {screenSize === 'large' && (
                    <img
                        className="main-logo logo"
                        src="./assets/img/app/workspace.png"
                        alt="Large Logo"
                    />
                )}
            </Link>
            <nav>
                <NavLink to="/">
                    <img
                        className="home-logo logo"
                        src="./assets/img/app/google-home.png"
                        alt="mail_logo"
                    />
                </NavLink>
                <NavLink to="/about">
                    <img className="about-logo logo" src="./assets/img/app/about.png" alt="mail_logo" />
                </NavLink>
                <NavLink to="/mail/inbox">
                    <img className="mail-logo logo" src="./assets/img/mail/logo.png" alt="mail_logo" />
                </NavLink>
                <NavLink to="/note">
                    <img className="note-logo logo" src="./assets/img/note/logo.png" alt="note_logo" />
                </NavLink>
            </nav>
        </header>
    )
}
