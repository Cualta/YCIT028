import { Children } from "react"
import "./App.styles.css"

export function App() {
    const isSignedIn = true

    return (
        <div className="App">
            <Header>
                <NavBar>
                    <NavBarItem text="Products" />
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
    // Will work if you are careful
    // props.children.forEach(child => {
    // })

    // Robust way to do it
    Children.forEach(props.children, (child) => {
        if (
            // Don't hard code NavBarItem because webpack might change the function name
            // child.type.name !== "NavBarItem" &&
            child.type.name !== NavBarItem.name &&
            child.type.name !== NavBarSeperator.name
        ) {
            console.error("HEY! YOU ARE ONLY ALLOWED TO PUT NAV BAR THINGS!!!")
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
