import { NavLink } from 'react-router-dom';


export const DesktopNav = () => {

    return (
        <div className='navContainer'>
            <NavLink to='/' className='link'>
                Home
            </NavLink>
            <NavLink to='/projects' className='link'>
                Projects
            </NavLink>
            <NavLink to='/resume' className='link'>
                Resum&eacute;
            </NavLink>
        </div>
    );

}
