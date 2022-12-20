import { Headline } from './HomeHeadline';
import { NavButtons } from './HomeNavButtons';
import { SocialIcons } from './HomeSocialIcons';

import { Container } from '@mui/material';


export const Home = () => {

    return (
        <Container id='home'>
            <Headline />
            <NavButtons />
            <SocialIcons />
        </Container>
    );

}