import { useState } from "react"
import "./Screen.styles.css"

export function ScreenRow() {
    const [color, colorSet] = useState("cornsilk")

    const handleClick = () => {
        if (color === "cornsilk") {
            colorSet("lavender")
        } else {
            colorSet("cornsilk")
        }
    }
    return (
        <div className="screen">
            <div
                className="top-screen-row"
                style={{ backgroundColor: color }}
                onClick={handleClick}
            >
                <div>My Calculator</div>
            </div>
        </div>
    )
}
