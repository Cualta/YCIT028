import { useState } from "react"
import "./Keypad.styles.css"
import { ScreenRow } from "./Screen"

export function Buttons() {
    const [value, setNumber] = useState(0)

    const handleButtonClick = (event) => {
        setNumber(event)
    }

    return (
        <div className="button-row">
            <div>
                <ScreenRow></ScreenRow>
            </div>
            <div className="currentValue">Current Value: {value}</div>
            <div>
                <button
                    onClick={() => {
                        handleButtonClick(7)
                    }}
                >
                    7
                </button>
                <button
                    onClick={() => {
                        handleButtonClick(8)
                    }}
                >
                    8
                </button>
                <button
                    onClick={() => {
                        handleButtonClick(9)
                    }}
                >
                    9
                </button>
                <button
                    onClick={() => {
                        handleButtonClick("/")
                    }}
                >
                    /
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        handleButtonClick(4)
                    }}
                >
                    4
                </button>
                <button
                    onClick={() => {
                        handleButtonClick(5)
                    }}
                >
                    5
                </button>
                <button
                    onClick={() => {
                        handleButtonClick(6)
                    }}
                >
                    6
                </button>
                <button
                    onClick={() => {
                        handleButtonClick("*")
                    }}
                >
                    *
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        handleButtonClick(1)
                    }}
                >
                    1
                </button>
                <button
                    onClick={() => {
                        handleButtonClick(2)
                    }}
                >
                    2
                </button>
                <button
                    onClick={() => {
                        handleButtonClick(3)
                    }}
                >
                    3
                </button>
                <button
                    onClick={() => {
                        handleButtonClick("-")
                    }}
                >
                    -
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        handleButtonClick(0)
                    }}
                >
                    0
                </button>
                <button
                    onClick={() => {
                        handleButtonClick(".")
                    }}
                >
                    .
                </button>
                <button
                    onClick={() => {
                        handleButtonClick("=")
                    }}
                >
                    =
                </button>
                <button
                    onClick={() => {
                        handleButtonClick("+")
                    }}
                >
                    +
                </button>
            </div>
        </div>
    )
}
