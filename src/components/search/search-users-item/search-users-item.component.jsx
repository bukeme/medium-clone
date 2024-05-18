import {AuthorPostFollowBtn} from '../../blog-post/blog-post-author-section/blog-post-author-section.component';
import TopicIcon from '../../../assets/topic-icon.svg?react';
import './search-users-item.styles.css';



const SearchUsersItem = ({item, otherPages}) => {
	return (
		<div className={`search-users-item ${otherPages ? 'other-pages' : ''}`}>
			{
				item.img ?
				<img className='search-users-item__img' alt='User' src={item.img} /> :
				<div className='search-users-item__img-icon'>
					<TopicIcon />
				</div>
			}
			<div className='search-users-item__user'>
				<h5 className={`search-users-item__user--name ${otherPages ? 'other-pages' : ''}`}>{item.name}</h5>
				{
					item.text ?
					<div className={`search-users-item__user--overview ${otherPages ? 'other-pages' : ''}`}>
						{item.text}
					</div> :
					<div className={`search-users-item__user--overview ${otherPages ? 'other-pages' : ''}`}>
						<span className='stories-count'>{item.storiesCount} Stories</span>
						<span className='stories-dot' />
						<span className='writes-count'>{item.writersCount} Writers</span>
					</div>
				}
				
			</div>
			<span className={`search-users-item__follow-btn ${otherPages ? 'other-pages' : ''}`}>
				<AuthorPostFollowBtn>Follow</AuthorPostFollowBtn>
			</span>
		</div>
	);
}

export default SearchUsersItem;