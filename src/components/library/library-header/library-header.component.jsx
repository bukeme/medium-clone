import SearchNav from '../../search/search-nav/search-nav.component';
import './library-header.styles.css';



const LibraryHeader = () => {
	const links = [
		{
			path: '/me/lists',
			text: 'Your lists'
		},
		{
			path: '/me/lists/reading-history',
			text: 'Reading history'
		}
	]
	return (
		<div className='library-header'>
			<h1 className='library-header__title'>Your library</h1>
			<SearchNav links={links} />
		</div>
	);
}

export default LibraryHeader;