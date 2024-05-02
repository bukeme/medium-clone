import {useRef} from 'react';
import LeftArrow from '../../../assets/left-arrow.svg?react';
import RightArrow from '../../../assets/right-arrow.svg?react';
import PlusIcon from '../../../assets/plus.svg?react';
import {manageIcons, scrollLeft, scrollRight} from './main-nav.utils';

import './main-nav.styles.css';



const MainNav = () => {
	const topics = [
		'Remote Work', 'Beauty', 'JavaScript',
		'Leadership', 'Product Management', 'Photography',
		'UX', 'Society', 'Marketing',
		'Cybersecurity', 'Freelancing', 'Lifestyle'
	]
	const leftArrowElement = useRef();
	const plusIconElement = useRef();
	const sliderElement = useRef();
	const rightArrowElement = useRef();

	const handleScrollLeft = () => {
		scrollLeft(
			leftArrowElement.current,
			plusIconElement.current,
			sliderElement.current,
			rightArrowElement.current
		)
	}

	const handleScrollRight = () => {
		scrollRight(
			leftArrowElement.current,
			plusIconElement.current,
			sliderElement.current,
			rightArrowElement.current
		)
	}

	const handleSliderScroll = () => {
		manageIcons(
			leftArrowElement.current,
			plusIconElement.current,
			sliderElement.current,
			rightArrowElement.current
		)
	}
	return (
		<div className='main-nav'>
			<div className='main-nav__left--arrow' ref={leftArrowElement}>
				<LeftArrow className='main-nav__left--arrow__icon' onClick={handleScrollLeft} />
			</div>
			<div className='main-nav__left--plus active' ref={plusIconElement}>
				<PlusIcon className='main-nav__left--plus__icon' />
			</div>
			<div className='main-nav__slider' ref={sliderElement} onScroll={handleSliderScroll}>
				<div className='main-nav__slider--item'>
					<span>For You</span>
				</div>
				<div className='main-nav__slider--item'>
					<span>Following</span>
				</div>
				{
					topics.map((topic) => (
						<div className='main-nav__slider--item'>
							<span>{topic}</span>
						</div>
					))
				}
			</div>
			<div className='main-nav__right-arrow active' ref={rightArrowElement}>
				<RightArrow className='main-nav__right-arrow--icon' onClick={handleScrollRight} />
			</div>
		</div>
	);
}

export default MainNav;