import { App } from "./App"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
)
