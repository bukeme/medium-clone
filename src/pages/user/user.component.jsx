import {Routes, Route} from 'react-router-dom';
import UserMain from '../../components/user/user-main/user-main.component';
import UserAside from '../../components/user/user-aside/user-aside.component';
import UserFollowing from '../../components/user/user-following/user-following.component';
import UserFollowers from '../../components/user/user-followers/user-followers.component';
import './user.styles.css';



const User = () => {
	return (
		<div className='user'>
			<Routes>
				<Route exact path='*' element={<UserMain />} />
				<Route exact path='following' element={<UserFollowing />} />
				<Route exact path='followers' element={<UserFollowers />} />
			</Routes>
			
			<UserAside />
		</div>
	);
}

export default User;