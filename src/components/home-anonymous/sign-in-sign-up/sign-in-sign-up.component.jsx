import {Link, useLocation} from 'react-router-dom';
import Logo from '../../../assets/logo.svg?react';
import FormGroup from '../form-group/form-group.component';
import {AuthorPostFollowBtn} from '../../blog-post/blog-post-author-section/blog-post-author-section.component';
import './sign-in-sign-up.styles.css';



const SignInSignUp = () => {
	const location = useLocation();
	const action = location.pathname === '/medium-clone/sign-in' ? 'signIn' : 'signUp';
	const dataObjects = {
		'signIn': {
			title: 'Sign In',
			formFields: ['email', 'password'],
			submitBtnText: 'Sign in'
		},
		'signUp': {
			title: 'Register',
			formFields: ['full name', 'email', 'password'],
			submitBtnText: 'Create account'
		},
	}
	return (
		<div className='sign-in-sign-up'>
			<div className='sign-in-sign-up__logo-container'>
				<Link to='/medium-clone/'>
					<Logo className='sign-in-sign-up__logo' />
					<h3>Medium</h3>
				</Link>
			</div>
			<h2 className='sign-in-sign-up__title'>{dataObjects[action].title}</h2>
			<div className='sign-in-sign-up__form'>
				{
					dataObjects[action].formFields.map(field => (
						<div className='sign-in-sign-up__form-field'>
							<FormGroup type={field} />
						</div>
					))
				}
				<div className='sign-in-sign-up__form-submit'>
					<AuthorPostFollowBtn>{dataObjects[action].submitBtnText}</AuthorPostFollowBtn>
				</div>
			</div>
		</div>
	);
}

export default SignInSignUp;