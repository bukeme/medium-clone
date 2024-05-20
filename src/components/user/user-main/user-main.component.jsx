import {Routes, Route} from 'react-router-dom';
import UserHeader from '../user-header/user-header.component';
import UserHome from '../user-home/user-home.component';
import UserAbout from '../user-about/user-about.component';
import './user-main.styles.css';



const UserMain = () => {
	return (
		<div className='user-main'>
			<UserHeader />
			<Routes>
				<Route exact path='' element={<UserHome />} />
				<Route path='about' element={<UserAbout />} />
			</Routes>
		</div>
	);
}

export default UserMain;