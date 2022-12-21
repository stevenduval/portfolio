import { Avatar, Link as MuiLink, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const SocialIcons = () => {

    const data = [
        { href: 'https://github.com/stevenduval', title: 'GitHub', bgColor: '#FFFFFF', icon: <GitHubIcon /> },
        { href: 'https://linkedin.com/in/stevenduval', title: 'LinkedIn', bgColor: '#0077B5', icon: <LinkedInIcon /> }
    ];

    return (
        <Stack className='socialIcons'>
            {data.map((item, index) => (
                <MuiLink key={index} href={item.href} rel='noopener' target='_blank' title={item.title}>
                    <Avatar sx={{ backgroundColor: item.bgColor }} alt={item.title}>
                        {item.icon}
                    </Avatar>
                </MuiLink>
            ))}
        </Stack>
    );

}