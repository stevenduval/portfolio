import { Avatar, Link as MuiLink, Stack } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const SocialIcons = () => {

    return (
        <Stack direction='row' spacing={2} justifyContent='center'>
            <MuiLink href='https://github.com/stevenduval' rel='noopener' target='_blank' title='GitHub'>
                <Avatar sx={{ backgroundColor: '#FFFFFF', width: 30, height: 30 }} alt='GitHub'>
                    <GitHubIcon sx={{ width: 25, height: 25 }} />
                </Avatar>
            </MuiLink>
            <MuiLink href='https://linkedin.com/in/stevenduval' rel='noopener' target='_blank' title='LinkedIn'>
                <Avatar sx={{ backgroundColor: '#0077B5', width: 30, height: 30 }} alt='LinkedIn'>
                    <LinkedInIcon sx={{ width: 25, height: 25 }} />
                </Avatar>
            </MuiLink>
        </Stack>
    );

}