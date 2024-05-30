import CloseIcon from '../../../assets/close.svg?react';
import './sign-in-sign-up-hoc.styles.css';



const SignInSignUpHOC = WrapperComponent => (({setAuthPopUp}) => {
	return (
		<div className='sign-in-sign-up-hoc'>
			<div className='sign-in-sign-up-hoc__main'>
				<CloseIcon onClick={() => {setAuthPopUp(0)}} className='sign-in-sign-up-hoc__close-icon' />
				<WrapperComponent />
			</div>
			
			<div onClick={() => {setAuthPopUp(0)}} className='sign-in-sign-up-hoc__overlay' />
		</div>
	);
});

export default SignInSignUpHOC;