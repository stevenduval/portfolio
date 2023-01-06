import { ProjectMedia } from './ProjectMedia';
import { ProjectContent } from './ProjectContent';
import { ProjectActions } from './ProjectActions';
import { Container, Card, Grid } from '@mui/material';


export const Projects = () => {

    const data = [
        { mockupImg: './images/portfolio-mockup.png', title: 'Portfolio', description: 'This project is a custom built single page application.  I built this to gain more knowledge in the tech listed below and to showcase my abilities and projects.', tech: 'React, React Router, MUI', liveLink: 'https://stevenmduval.com' , githubLink: 'https://github.com/stevenduval/portfolio' },
        { mockupImg: './images/spotify-playlist-maker-mockup.png', title: 'Spotify Playlist Maker', description: 'This project utilizes the Spotify API, which allows users to search for songs and create a playlist that can then be saved in their Spotify account.', tech: 'React, React Router, Redux, MUI', liveLink: 'https://spotify.stevenmduval.com' , githubLink: 'https://github.com/stevenduval/react_redux_spotify_app' },
        { mockupImg: './images/reddit-mockup.png', title: 'Reddit App', description: 'This project utilizes the Reddit JSON API, which allows users to view posts at a high level as well as individually by clicking on the post to view comments.', tech: 'React, React Router, Redux, MUI', liveLink: 'https://reddit.stevenmduval.com' , githubLink: 'https://github.com/stevenduval/react_redux_reddit_app' }
    ];

    return (
        <Container id='projects' maxWidth='xl'>
            <Grid container spacing={4}>
                {data.map((item, index) => (
                    <Grid className='animate' item key={index} xs={12} lg={6}>
                        <Card>
                            <ProjectMedia data={item} />
                            <ProjectContent data={item} />
                            <ProjectActions data={item} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );

}