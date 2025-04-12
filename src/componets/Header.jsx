import '../styles/Header.css';

function Header() {
    return (
        <header className='header'>
            <div className="logo">My<span>Weather</span></div>
            <ul className='navbar'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header;