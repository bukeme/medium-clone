import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import LogoMedium from '../../../assets/logo-medium.svg?react';
import './home-anonymous-nav.styles.css';



const HomeAnonymousNav = ({authPopUp, setAuthPopUp}) => {
	let popUpComponent;
	switch (authPopUp) {
		case 1:
			popUpComponent = <SignIn setAuthPopUp={setAuthPopUp} />
			break;
		case 2:
			popUpComponent = <SignUp setAuthPopUp={setAuthPopUp} />
			break;
		default:
			popUpComponent = null;
	}
	return (
		<div className='home-anonymous-nav'>
			<a href='#' className='home-anonymous-nav__logo-link'>
				<LogoMedium className='home-anonymous-nav__logo-icon' />
			</a>
			<div className='home-anonymous-nav__right'>
				<span onClick={() => {setAuthPopUp(1)}} className='home-anonymous-nav__right--link'>Write</span>
				<span onClick={() => {setAuthPopUp(1)}} className='home-anonymous-nav__right--link'>Sign in</span>
				<button onClick={() => {setAuthPopUp(2)}} className='home-anonymous-nav__right--btn'>Get started</button>
			</div>
			{popUpComponent}
		</div>
	);
}

export default HomeAnonymousNav;