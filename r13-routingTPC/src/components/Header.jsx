import { Link } from "wouter";

function Header () {
    return (
        <>
        <h1>Welcome to my website</h1>
        <nav>
            <Link href="/">Homepage</Link> | <Link href="/Form">Formulário</Link>
        </nav>
        </>
    )
}

export default Header;