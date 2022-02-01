import "./App.styles.css"

import { useState } from "react"

export function App() {
    const [color, colorSet] = useState("#d27979")
    const [time, animationSet] = useState("")

    const handleColorInput = (c) => {
        //get new color value and fill ball
        colorSet(c.target.value)
        console.log("color", color)
    }

    const handlerAnimationTime = (a) => {
        //get value of second of bounce animation
        animationSet(a.target.value)
        console.log("time", time)
    }

    return (
        <div className="App">
            <h1> My bouncing ball</h1>
            <div className="container">
                <div className="color">
                    <label>Color</label>
                    <input
                        type="text"
                        placeholder="#00FF00"
                        value={color}
                        onChange={handleColorInput}
                    />
                </div>
                <div className="times">
                    <label>Animation on seconds</label>
                    <input
                        type="text"
                        value={time}
                        placeholder="0.9s"
                        onChange={handlerAnimationTime}
                    />
                </div>
            </div>
            <div className="bouncing">
                <div className="canva">
                    <div
                        className="ball"
                        style={{
                            backgroundColor: color,
                            animationDuration: time,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
