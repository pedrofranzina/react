import { Link } from "wouter";

function Header() {
    return (
        <header>
            <h1>Welcome</h1>
            <nav>
                <Link href="/">Homepage</Link> | <Link href="/contacts">Contacts</Link> | <Link href="/photos">Photos</Link>
            </nav>
        </header>
    )
}

export default Header;