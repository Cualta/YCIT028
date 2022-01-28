import { useState } from "react"
import "./App.styles.css"

export function App() {
    console.log("Called App")

    const [color, colorSet] = useState("red")

    const handleColorClick = (ev) => {
        colorSet(ev.target.style.backgroundColor)
        console.log("color", color)
    }

    return (
        <div className="App">
            <div style={{ backgroundColor: color }}>My color app</div>

            <div className="color-picker">
                <span
                    style={{ backgroundColor: "red" }}
                    onClick={handleColorClick}
                />
                <span
                    style={{ backgroundColor: "white" }}
                    onClick={(ev) => handleColorClick(ev)}
                />
                <span
                    style={{ backgroundColor: "blue" }}
                    onClick={handleColorClick}
                />
                <span
                    style={{ backgroundColor: "black" }}
                    onClick={handleColorClick}
                />
                <span
                    style={{ backgroundColor: "yellow" }}
                    onClick={handleColorClick}
                />
                <span
                    style={{ backgroundColor: "orange" }}
                    onClick={handleColorClick}
                />
                <span
                    style={{ backgroundColor: "green" }}
                    onClick={handleColorClick}
                />
                <span
                    style={{ backgroundColor: "purple" }}
                    onClick={handleColorClick}
                />
                <span
                    style={{ backgroundColor: "magenta" }}
                    onClick={handleColorClick}
                />
            </div>
        </div>
    )
}
