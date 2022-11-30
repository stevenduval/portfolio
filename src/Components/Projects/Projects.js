import { Avatar, Container, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import SpotifyMockup from './static/images/spotify-playlist-maker-mockup.png';
import PortfolioMockup from './static/images/portfolio-mockup.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export const Projects = () => {
    return (
        <Container className="animation" sx={{ pl: {md: "137px"}, display: "flex", alignItems: "center" }} maxWidth="xl">
          <Grid container spacing={4}>
           {/* where you would put map to diff cards */}
              <Grid item key={1} xs={12} lg={6} sx={{paddingTop: "0 !important", pb: 4}}>
              <Card
                  sx={{ height: "100%", display: "flex", flexDirection: "column", textAlign: "center", backgroundImage: "none", boxShadow: "none" }}
                >
                  <CardMedia
                    component="img"
                    image={SpotifyMockup}
                    alt="Spotify Playlist Maker Mockup"
                  />
                  <CardContent sx={{ flexGrow: 1, pb: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Spotify Playlist Maker
                    </Typography>
                    <Typography variant="body2" sx={{width: "80%", margin: "0 auto", pb:1 }}>
                      This project utilizies the Spotify API, which allows users to search for songs and create a playlist that can then be saved in their Spotify account.
                    </Typography>
                    <Typography variant="caption">
                    Technologies: React, CSS
                    </Typography>
                  </CardContent>
                  <CardActions sx={{justifyContent: "center", pb: 2}}>
            <Link href="https://spotify.stevenmduval.com" rel="noopener" target="_blank" title="Open in Browser">
                <Avatar sx={{ width: 25, height: 25 }} alt="Open in Browser" variant="rounded">
                    <LaunchIcon sx={{ width: 20, height: 20 }}/>
                </Avatar>
            </Link>
            <Link href="https://github.com/stevenduval/react-spotify-playlist-app" rel="noopener" target="_blank" title="View on GitHub">
                <Avatar sx={{ width: 25, height: 25 }} alt="GitHub" variant="rounded">
                    <GitHubIcon sx={{ width: 20, height: 20 }}/>
                </Avatar>
            </Link>
                  </CardActions>
                </Card>
              </Grid>
            {/* end of card  */}
            <Grid item key={2} xs={12} lg={6} sx={{paddingTop: "0 !important", pb: 4}}>
            <Card
                  sx={{ height: "100%", display: "flex", flexDirection: "column", textAlign: "center", backgroundImage: "none", boxShadow: "none" }}
                >
                  <CardMedia
                    component="img"
                    image={PortfolioMockup}
                    alt="Portfolio Mockup"
                  />
                  <CardContent sx={{ flexGrow: 1, pb: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Portfolio
                    </Typography>
                    <Typography variant="body2" sx={{width: "80%", margin: "0 auto", pb:1 }}>
                      This project is a custom built single page application.  I built this gain more knowledge in the tech listed below and to showcase my abilities and projects.
                    </Typography>
                    <Typography variant="caption">
                    Technologies: React, React Router, MUI (Material UI)
                    </Typography>
                  </CardContent>
                  <CardActions sx={{justifyContent: "center", pb: 2}}>
            <Link href="https://stevenmduval.com" rel="noopener" target="_blank" title="Open in Browser">
                <Avatar sx={{ width: 25, height: 25 }} alt="Open in Browser" variant="rounded">
                    <LaunchIcon sx={{ width: 20, height: 20 }}/>
                </Avatar>
            </Link>
            <Link href="https://github.com/stevenduval/portfolio" rel="noopener" target="_blank" title="View on GitHub">
                <Avatar sx={{ width: 25, height: 25 }} alt="GitHub" variant="rounded">
                    <GitHubIcon sx={{ width: 20, height: 20 }}/>
                </Avatar>
            </Link>
                  </CardActions>
                </Card>
          </Grid>
          </Grid>
        </Container>
    );
}