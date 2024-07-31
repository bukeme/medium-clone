import {Link} from 'react-router-dom';
import SearchNav from '../../search/search-nav/search-nav.component';
import './user-header.styles.css';



const UserHeader = () => {
	const links = [
		{
			path: '/medium-clone/@simeon.emanuilov',
			text: 'Home'
		},
		{
			path: '/medium-clone/@simeon.emanuilov/about',
			text: 'About'
		}
	]
	return (
		<div className='user-header'>
			<div className='user-header__cover-img'>
				<Link to='/medium-clone/@simeon.emanuilov'>
					<img alt='User Cover' src='https://miro.medium.com/v2/resize:fit:1400/1*wVlj00ypCgPUs5zaww35YQ.jpeg' />
				</Link>
			</div>
			<div className='user-header__text'>
				<div className='user-header__title-link'>
					<Link to='/medium-clone/@simeon.emanuilov'>
						<h1 className='user-header__title'>Simeon Emanuilov</h1>
					</Link>
				</div>
				<div className='user-header__nav'>
					<SearchNav links={links} />
				</div>
			</div>
		</div>
	);
}

export default UserHeader;