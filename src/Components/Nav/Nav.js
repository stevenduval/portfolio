import React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, useTheme, useMediaQuery } from "@mui/material"

import { DrawerComponent } from "./Drawer";
import './static/styles/stylesheet.css';


export const Nav = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static">
            <Toolbar>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className="navContainer">
                        <NavLink to="/" className="link">
                            Home
                        </NavLink>
                        <NavLink to="/about" className="link">
                            About
                        </NavLink>
                        <NavLink to="/projects" className="link">
                            Projects
                        </NavLink>
                        <NavLink to="/resume" className="link">
                            Resum&eacute;
                        </NavLink>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}