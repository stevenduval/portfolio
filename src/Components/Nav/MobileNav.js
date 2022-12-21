import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export const MobileNav = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const data = [
        { href: '/', linkName: 'Home' },
        { href: '/projects', linkName: 'Projects' },
        { href: '/resume', linkName: 'Resumé' }
    ];

    return (
        <>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor='top' transitionDuration={{ enter: 1000, exit: 500 }}>
                <List>
                    {data.map((item, index) => (
                        <ListItem key={index} onClick={() => setOpenDrawer(false)} sx={{justifyContent: 'center'}}>
                            <Link to={item.href} className='link'>
                                {item.linkName}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
    
}