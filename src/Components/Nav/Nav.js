import React from "react";
import { AppBar, Toolbar, CssBaseline, useTheme, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom";

import './Styles/NavStyles.css';
import { DrawerComponent } from "./Drawer";


export const Nav = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className="navContainer">
                        <Link to="/" className="link">
                            Home
                        </Link>
                        <Link to="/about" className="link">
                            About
                        </Link>
                        <Link to="/portfolio" className="link">
                            Portfolio
                        </Link>
                        <Link to="/faq" className="link">
                            Experience
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}