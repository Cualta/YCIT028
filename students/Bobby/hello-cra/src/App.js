import "./App.styles.css"

export function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <div className="Header">
            <NavBar />
        </div>
    )
}

function NavBar() {
    return (
        <div className="NavBar">
            <NavBarItem text="Home" />
            <NavBarItem text="Products" />
            <NavBarItem text="About" />
        </div>
    )
}

function NavBarItem(props) {
    return (
        <a onClick={() => alert("Hello?")}>
            <div className="NavBarItem">{props.text}</div>
        </a>
    )
}

function Main() {
    return <div className="Main"></div>
}

function Footer() {
    return <div className="Footer"></div>
}
