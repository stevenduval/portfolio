import { Link } from 'react-router-dom';

import { Stack } from '@mui/material';


export const NavButtons = () => {

    const data = [
        { href: '/projects', linkName: 'Projects' },
        { href: '/resume', linkName: 'Resumé' }
    ];

    return (
        <Stack className='linkContainer' maxWidth='sm'>
            {data.map((item, index) => (
                <Link key={index} to={item.href} className='link'>
                    {item.linkName}
                </Link>
            ))}
        </Stack>
    );

}