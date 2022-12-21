import { Avatar, CardActions, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';


export const ProjectActions = (props) => {

    const { data } = props;

    return (
        <CardActions>
            <MuiLink href={data.liveLink} rel='noopener' target='_blank' title='Open in Browser'>
                <Avatar alt='Open in Browser' variant='rounded'>
                    <LaunchIcon />
                </Avatar>
            </MuiLink>
            <MuiLink href={data.githubLink} rel='noopener' target='_blank' title='View on GitHub'>
                <Avatar alt='GitHub' variant='rounded'>
                    <GitHubIcon />
                </Avatar>
            </MuiLink>
        </CardActions>
    );

}