import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/system';

export const DesktopNav = () => {

    const data = [
        { href: '/', linkName: 'Home' },
        { href: '/projects', linkName: 'Projects' },
        { href: '/resume', linkName: 'Resumé' }
    ];

    return (
        <Stack className='navContainer'>
            {data.map((item, index) => (
                <NavLink key={index} to={item.href} className='link'>
                    {item.linkName}
                </NavLink>
            ))}
        </Stack>
    );

}
