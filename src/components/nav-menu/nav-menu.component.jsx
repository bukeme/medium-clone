import {useState} from 'react';
import NavDropdown from '../nav-dropdown/nav-dropdown.component';
import placeholderImage from '../../assets/placeholder.jpg';
import './nav-menu.styles.css'



const NavMenu = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<div onClick={() => {setShowDropdown(!showDropdown)}} className='nav-menu'>
			<img src={placeholderImage} alt='User' />
			{
				showDropdown ?
				<NavDropdown /> :
				null
			}
		</div>
	);
}

export default NavMenu;