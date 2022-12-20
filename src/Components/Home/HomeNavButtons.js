import { Link } from 'react-router-dom';

import { Stack } from '@mui/material';


export const NavButtons = () => {

    return (
        <Stack maxWidth='sm' direction='row' justifyContent='center' sx={{ mb: 3, width: '100%', alignSelf: 'center' }}>
            <Link to='/projects' className='link'>Projects</Link>
            <Link to='/resume' className='link'>Resum&eacute;</Link>
        </Stack>
    );

}