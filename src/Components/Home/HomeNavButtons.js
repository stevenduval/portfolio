import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const NavButtons = () => {
    return (
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/resume" className="link">Resum&eacute;</Link>
        </Stack>
    );
}