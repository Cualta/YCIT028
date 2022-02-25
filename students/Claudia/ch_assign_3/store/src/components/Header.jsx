import { Box, Paper, Typography } from "@mui/material"

export function Header() {
    return (
        <Box position="static" sx={{ flexGrow: 1, mb: 2 }}>
            <Paper sx={{ backgroundColor: "#436dac" }}>
                <Typography
                    variant="h2"
                    component="header"
                    sx={{ flexGrow: 1 }}
                    textAlign={"center"}
                    sx={{ py: 2 }}
                >
                    Emoji Faces
                </Typography>
            </Paper>
        </Box>
    )
}
