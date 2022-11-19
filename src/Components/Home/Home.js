import { Box, Container } from "@mui/material";

import './static/styles/stylesheet.css';

import { Headline } from "./HomeHeadline";
import { NavButtons } from "./HomeNavButtons";
import { SocialIcons} from "./HomeSocialIcons";

export const Home = () => {
    return (
        <Box sx={{ display: "flex", height: "100vh", alignItems: "center" }}>
            <Container maxWidth="sm" sx={{ display: "flex", height: "40vh", justifyContent: "space-evenly", flexDirection: "column" }}>
                <Headline />
                <NavButtons />
                <SocialIcons />
            </Container>
        </Box>
    );
}