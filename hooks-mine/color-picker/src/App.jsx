import { useState } from "react"
import "./App.styles.css"

export function App() {
    const [color, colorSet] = useState("red")

    const handleColorClick = (ev) => {
        colorSet(ev.target.style.backgroundColor)
        // colorSet(ev.target.getAttribut("color")
    }

    return (
        <div className="App">
            <div style={{ backgroundColor: color }}>My Color App</div>
            <div className="color-picker">
                <span
                    //color="red"
                    style={{ backgroundColor: "red" }}
                    onClick={handleColorClick}
                />
                <span
                    //color="white"
                    style={{ backgroundColor: "white" }}
                    onClick={(ev) => handleColorClick(ev)}
                />
                <span
                    //color="blue"
                    style={{ backgroundColor: "blue" }}
                    onClick={handleColorClick}
                />
                <span
                    //color="black"
                    style={{ backgroundColor: "black" }}
                    onClick={handleColorClick}
                />
                <span
                    //color="yellow"
                    style={{ backgroundColor: "yellow" }}
                    onClick={handleColorClick}
                />
                <span
                    //color="orange"
                    style={{ backgroundColor: "orange" }}
                    onClick={handleColorClick}
                />
                <span
                    //color="green"
                    style={{ backgroundColor: "green" }}
                    onClick={handleColorClick}
                />
                <span
                    //color="purple"
                    style={{ backgroundColor: "purple" }}
                    onClick={handleColorClick}
                />
                <span
                    //color="magenta"
                    style={{ backgroundColor: "magenta" }}
                    onClick={handleColorClick}
                />
            </div>
        </div>
    )
}
