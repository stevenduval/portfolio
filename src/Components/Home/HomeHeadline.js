
import {Typography } from "@mui/material";

export const Headline = () => {
    return (
        <>
            <Typography component="h1" variant="h1" align="center" sx={{ fontFamily: "'PT Sans Narrow', serif" }}>
                STEVEN DUVAL
            </Typography>
            <Typography align="center" variant="h6" color="text.secondary" paragraph sx={{ fontFamily: "'PT Sans Narrow', serif" }}>
                Front-End Developer based in the greater Chicagoland area.
            </Typography>
        </>
    );
}
