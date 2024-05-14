import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/nav/nav.component';
import Home from './pages/home/home.component';
import BlogPost from './pages/blog-post/blog-post.component';
import Search from './pages/search/search.component';
import Write from './pages/write/write.component';
import './App.css';

const NavRoutes = () => {
  return (
    <>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:username/:postSlug' element={<BlogPost />} />
          <Route path='/search/*' element={<Search />} />
        </Routes>
    </>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/*' element={<NavRoutes />} />
          <Route exact path='/new-story' element={<Write />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
