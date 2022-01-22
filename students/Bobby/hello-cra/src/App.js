import "./App.styles.css"

export function App() {
    const isSignedIn = true

    return (
        <div className="App">
            <Header>
                <NavBar>
                    <NavBarItem text="Products" />
                    <NavBarItem text="About" />
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

function Main() {
    return <div className="Main"></div>
}

function Footer() {
    return <div className="Footer"></div>
}

// HERE IS THE BAD PATTERN WITHOUT COMPOSITION (not using children props)
//
// export function App() {
//     const isSignedIn = true

//     return (
//         <div className="App">
//             <Header isSignedIn={isSignedIn} />
//             <Main />
//             <Footer />
//         </div>
//     )
// }

// function Header(props) {
//     return (
//         <div className="Header">
//             <NavBar isSignedIn={props.isSignedIn} />
//         </div>
//     )
// }

// function NavBar(props) {
//     return (
//         <div className="NavBar">
//             <NavBarItem text="Home" />
//             <NavBarItem text="Products" />
//             <NavBarItem text="About" />
//             <NavBarItem text={props.isSignedIn ? "Sign out" : "Sign in"} />
//         </div>
//     )
// }

// function NavBarItem(props) {
//     return (
//         <a onClick={() => alert("Hello?")}>
//             <div className="NavBarItem">{props.text}</div>
//         </a>
//     )
// }

// function Main() {
//     return <div className="Main"></div>
// }

// function Footer() {
//     return <div className="Footer"></div>
// }
