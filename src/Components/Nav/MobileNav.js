import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';


export const MobileNav = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor='top' transitionDuration={{ enter: 1000, exit: 500 }}>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/' className='link'>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/projects' className='link'>Projects</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/resume' className='link'>Resum&eacute;</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}