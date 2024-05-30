import {useState} from 'react';
import HomeAnonymousNav from '../../components/home-anonymous/home-anonymous-nav/home-anonymous-nav.component';
import HomeAnonymousMain from '../../components/home-anonymous/home-anonymous-main/home-anonymous-main.component';
import './home-anonymous.styles.css';



const HomeAnonymous = () => {
	const [authPopUp, setAuthPopUp] = useState(0);
	return (
		<div className='home-anonymous'>
			<HomeAnonymousNav authPopUp={authPopUp} setAuthPopUp={setAuthPopUp} />
			<HomeAnonymousMain setAuthPopUp={setAuthPopUp} />
		</div>
	);
}

export default HomeAnonymous;