import {Routes, Route} from 'react-router-dom';
import UserMain from '../../components/user/user-main/user-main.component';
import UserAside from '../../components/user/user-aside/user-aside.component';
import UserFollow from '../../components/user/user-follow/user-follow.component';
import './user.styles.css';



const User = () => {
	return (
		<div className='user'>
			<Routes>
				<Route exact path='*' element={<UserMain />} />
				<Route exact path='following' element={<UserFollow />} />
			</Routes>
			
			<UserAside />
		</div>
	);
}

export default User;