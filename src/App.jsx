import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
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
import SignInSignUp from './components/home-anonymous/sign-in-sign-up/sign-in-sign-up.component';
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
      <BrowserRouter>
        <Routes>
          <Route exact path='/medium-clone/*' element={<NavRoutes />} />
          <Route exact path='/medium-clone/new-story' element={<Write />} />
          <Route path='/medium-clone/anonymous' element={<HomeAnonymous />} />
          <Route path='/medium-clone/sign-in' element={<SignInSignUp />} />
          <Route path='/medium-clone/sign-up' element={<SignInSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
