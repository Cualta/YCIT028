import { useState } from "react"

export function App() {
    console.log("start of program")

    const [counterValue, counterValueSet] = useState(2)

    console.log("counter", counterValue)

    let amount

    const handleButtonClick = (action) => {
        if (action === "increment") {
            amount = 1
        } else if (action === "decrement") {
            amount = -1
        } else {
            console.error("invalid action")
            return
        }
        counterValueSet(counterValue + amount)

        console.log("counter insed handleButtonClick", counterValue)
    }

    return (
        <div>
            Current count {counterValue}
            <button onClick={() => handleButtonClick("increment")}>
                Increase
            </button>
            <button onClick={() => handleButtonClick("decrement")}>
                Decrease
            </button>
        </div>
    )
}
