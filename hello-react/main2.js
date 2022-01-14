React.createElement("div")

const myEl = (
    <div>
        <h1>My Title</h1>
        <p>My description</p>
        <div></div>
    </div>
)

console.log(JSON.stringify(myEl))

const rootDiv = document.getElementById("taco")

ReactDOM.render(myEl, rootDiv)
