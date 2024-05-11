import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/nav/nav.component';
import Home from './pages/home/home.component';
import BlogPost from './pages/blog-post/blog-post.component';
import Search from './pages/search/search.component';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:username/:postSlug' element={<BlogPost />} />
          <Route path='/search/*' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
