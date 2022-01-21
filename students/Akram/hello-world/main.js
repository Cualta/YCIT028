// const myFirstElm = (
//     <div>
//         <h1>hello</h1>
//         <p>Bla bla bla</p>
//     </div>
// )

// console.log(myFirstElm)

const myContainerDiv = document.getElementById("container")

// ReactDOM.render(myFirstElm, myContainerDiv)

const MyFirstComp = (props) => {
    return (
        <div>
            <h1>hello</h1>
            <p>{props.myProp}</p>
            <p>{props.myProp2}</p>
        </div>
    )
}

function MySecondComp(taco) {
    console.log(taco)
    console.log(typeof taco)
    return <MyFirstComp {...taco}></MyFirstComp>
}

ReactDOM.render(
    <MySecondComp myProp="taco" myProp2="smokey"></MySecondComp>,
    myContainerDiv
)
