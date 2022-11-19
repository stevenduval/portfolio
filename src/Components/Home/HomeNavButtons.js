import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const NavButtons = () => {
    return (
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
            <Link to="/about" className="link">About</Link>
            <Link to="/portfolio" className="link">Portfolio</Link>
            <Link to="/experience" className="link">Experience</Link>
        </Stack>
    );
}