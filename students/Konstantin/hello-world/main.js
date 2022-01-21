// const myFirstEl = (
//     <div>
//         <h1>Hello</h1>
//     </div>
// )

// console.log(myFirstEl)

const myContainerDiv = Document.GetElementById("container")

// ReactDom.render(myFirstEl, myContainerDiv)

const MyFirstComp = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello</h1>
            <p>{props.myProp}</p>
            <p>{props.myProp2}</p>
        </div>
    )
}

function MySecondComp (props) {
    //return <MyFirstComp myProp={props.myProp} myProp2={props.myProp2}></MyFirstComp>
    return <MyFirstComp {...props}></MyFirstComp>
}


//only one render
ReactDOM.render(
    <MySecondComp myProp="taco" myProp2="smokey"></MyFirstComp>,
    myContainerDiv
)
