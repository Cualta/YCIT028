import { useState } from "react"

export function Counter() {
    console.log("Beginning of App")

    const [counterValue, counterValueSet] = useState(2)

    console.log("counter", counterValue)

    const handleButtonClick = (action) => {
        let amount
        if (action === "increment") {
            amount = 1
        } else if (action === "decrement") {
            amount = -1
        } else {
            console.error("Invalid action")
            return
        }

        counterValueSet(counterValue + amount)

        console.log("counter inside handleButtonClick", counterValue)
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
