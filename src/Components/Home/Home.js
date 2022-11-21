import { Box, Container } from "@mui/material";

import './static/styles/stylesheet.css';

import { Headline } from "./HomeHeadline";
import { NavButtons } from "./HomeNavButtons";
import { SocialIcons} from "./HomeSocialIcons";

export const Home = () => {
    return (
        <Box id="home" sx={{ display: "flex", height: "100%", alignItems: "center" }}>
            <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <Headline />
                <NavButtons />
                <SocialIcons />
            </Container>
        </Box>
    );
}