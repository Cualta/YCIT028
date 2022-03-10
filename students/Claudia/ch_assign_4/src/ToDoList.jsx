import React from "react"

export function TodoList(props) {
    return (
        <ul>
            {props.data.map((item, index) => (
                <li key={index}>
                    {item.text}
                    <button value={index} onClick={() => props.remove(index)}>
                        x
                    </button>
                </li>
            ))}
        </ul>
    )
}
