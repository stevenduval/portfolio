import { Avatar, Link, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const SocialIcons = () => {
    return (
        <Stack direction="row" spacing={2} justifyContent="center">
            <Link href="https://github.com/stevenduval" rel="noopener" target="_blank" title="GitHub">
                <Avatar sx={{ backgroundColor: "#FFFFFF" }} alt="GitHub">
                    <GitHubIcon />
                </Avatar>
            </Link>
            <Link href="https://linkedin.com/in/stevenduval" rel="noopener" target="_blank" title="LinkedIn">
                <Avatar sx={{ backgroundColor: "#0077B5" }} alt="LinkedIn">
                    <LinkedInIcon />
                </Avatar>
            </Link>
        </Stack>
    );
}