import './sign-in-sign-up-hoc.styles.css';



const SignInSignUpHOC = WrapperComponent => (({setAuthPopUp}) => {
	return (
		<div className='sign-in-sign-up-hoc'>
			<WrapperComponent />
			<div onClick={() => {setAuthPopUp(0)}} className='sign-in-sign-up-hoc__overlay' />
		</div>
	);
});

export default SignInSignUpHOC;