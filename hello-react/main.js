const myDomHtmlEl = document.createElement("div")

const myReactEl1 = React.createElement("div") // ANNOYING

// Using JSX (thanks to Babel)
const myReactEl2 = <div></div> // This is syntactic sugar for React.createElement("div", null, null)

console.log("0", myDomHtmlEl)
console.log("1", myReactEl1)
console.log("2", myReactEl2)
