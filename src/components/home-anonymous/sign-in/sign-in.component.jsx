import SignInSignUpHOC from '../sign-in-sign-up-hoc/sign-in-sign-up-hoc.component';
import './sign-in.styles.css';



const SignIn = () => {
	return (
		<div className='sign-in'>
			Hello
		</div>
	);
}

export default SignInSignUpHOC(SignIn);