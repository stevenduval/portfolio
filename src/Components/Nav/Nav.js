import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';

import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material'


export const Nav = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position='static'>
            <Toolbar>
                {isMobile ? (
                    <MobileNav />
                ) : (
                    <DesktopNav />
                )}
            </Toolbar>
        </AppBar>
    );

}