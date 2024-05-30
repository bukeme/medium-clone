import {useDispatch} from 'react-redux';
import {AuthorPostFollowBtn} from '../../blog-post/blog-post-author-section/blog-post-author-section.component';
import {setPopUpNumber} from '../../../redux/settings-pop-up';
import './settings-pop-up.styles.css';



const SettingsPopUp = (WrapperComponent, title) => {
	return () => {
		const dispatch = useDispatch();
		return (
			<form className='settings-pop-up'>
				<h2 className='settings-pop-up__header'>{title}</h2>
				<WrapperComponent />
				<div className='settings-pop-up__buttons'>
					<AuthorPostFollowBtn action={() => dispatch(setPopUpNumber(0))} outline={true}>Cancel</AuthorPostFollowBtn>
					<AuthorPostFollowBtn>Save</AuthorPostFollowBtn>
				</div>
			</form>
		);
	}
}

export default SettingsPopUp;