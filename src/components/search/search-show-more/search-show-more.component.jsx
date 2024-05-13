import ArrowDownIcon from '../../../assets/arrow-down.svg?react';
import './search-show-more.styles.css';



const SearchShowMore = () => {
	return (
		<div className='search-show-more'>
			<div className='search-show-more__text'>
				<span>Show more</span>
				<ArrowDownIcon className='icon' />
			</div>
		</div>
	);
}

export default SearchShowMore