import { Headline } from './HomeHeadline';
import { NavButtons } from './HomeNavButtons';
import { SocialIcons } from './HomeSocialIcons';
import { Container } from '@mui/material';


export const Home = () => {

    return (
        <Container id='home' className='animate'>
            <Headline />
            <NavButtons />
            <SocialIcons />
        </Container>
    );

}