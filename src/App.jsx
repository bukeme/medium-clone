import {HashRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/nav/nav.component';
import Home from './pages/home/home.component';
import BlogPost from './pages/blog-post/blog-post.component';
import Search from './pages/search/search.component';
import Write from './pages/write/write.component';
import ExploreTopics from './pages/explore-topics/explore-topics.component';
import RefineRecommendations from './pages/refine-recommendations/refine-recommendations.component';
import User from './pages/user/user.component';
import Library from './pages/library/library.component';
import Settings from './pages/settings/settings.component';
import HomeAnonymous from './pages/home-anonymous/home-anonymous.component';
import './App.css';

const NavRoutes = () => {
  return (
    <>
      <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:username/post/:postSlug' element={<BlogPost />} />
          <Route path='/:username/*' element={<User />} />
          <Route path='/search/*' element={<Search />} />
          <Route path='/explore-topics' element={<ExploreTopics />} />
          <Route path='/me/*' element={<RefineRecommendations />} />
          <Route path='/me/lists/*' element={<Library />} />
          <Route path='/me/settings' element={<Settings />} />
        </Routes>
    </>
  );
}

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/*' element={<NavRoutes />} />
          <Route exact path='/new-story' element={<Write />} />
          <Route path='/anonymous' element={<HomeAnonymous />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
