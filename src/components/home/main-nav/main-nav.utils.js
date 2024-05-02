export const manageIcons = (leftArrow, plusIcon, slider, rightArrow) => {
	if (slider.scrollLeft >= 20) {
		plusIcon.classList.remove('active');
		leftArrow.classList.add('active')
	} else {
		plusIcon.classList.add('active');
		leftArrow.classList.remove('active')
	}

	const maxScrollValue = slider.scrollWidth - slider.clientWidth - 20;
	if (slider.scrollLeft >= maxScrollValue) {
		rightArrow.classList.remove('active');
	} else {
		rightArrow.classList.add('active');
	}
}

export const scrollLeft = (leftArrow, plusIcon, slider, rightArrow) => {
	slider.scrollLeft -= 100;
	manageIcons(leftArrow, rightArrow, slider, plusIcon);
}

export const scrollRight = (leftArrow, plusIcon, slider, rightArrow) => {
	slider.scrollLeft += 100;
	manageIcons(leftArrow, rightArrow, slider, plusIcon);
}