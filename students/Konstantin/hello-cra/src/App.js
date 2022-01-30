import { Children } from "react"
import "./App.styles.css"

export function App() {
    const isSignedIn = true

    return (
        <div className="App">
            <Header>
                <NavBar>
                    <NavBarSeperator />
                    <NavBarItem text="Products" />
                    <NavBarSeperator />
                    <NavBarItem text="About" />
                    <NavBarSeperator />
                    <NavBarItem text={isSignedIn ? "Sign out" : "Sign in"} />
                </NavBar>
            </Header>
            <Main />
            <Footer />
        </div>
    )
}

function Header(props) {
    return <div className="Header">{props.children}</div>
}

function NavBar(props) {
    Children.forEach(props.children, (child) => {
        if (child.type.name !== NavBarItem.name && child.type.name !== NavBarSeperator.name) {
          console.error("Hey! You are only allow to put Nav Bar things")
        }
    })

    return (
        <div className="NavBar">
            <NavBarItem text="Home" />
            {props.children}
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

function NavBarSeperator() {
    return <span className="NavBarSeperator"></span>
}

function Main() {
    return <div className="Main"></div>
}

function Footer() {
    return <div className="Footer"></div>
}
