
import ResponsiveDrawer from './Admin/Layout';
import ResponsiveAppBar from './User/UserLayout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/Home/Home';
import About from './User/About/About';
import Blog from './User/Blog/Blog';
import SingleBlog from './User/Blog/singleBlog';
import AdminLayout from './Admin/Layout';
import AdminHome from './Admin/Home/AdminHome';
import AddBlog from './Admin/Blog/AddBlog';
import EditBlog from './Admin/Blog/EditBlog';
import Login from './Auth/Login';




function App() {
  return(
    <>
    <Router>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      {/* user layout */}
      <Route path="" element={<UserLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:id" element={<SingleBlog/>}/>
         </Route>
          {/* user layout end */}



          {/*  adminlayout*/}
          <Route path="/admin/" element={<AdminLayout/>}>
          <Route path="home" element={<AdminHome/>}/>
          <Route path="add" element={<AddBlog/>}/>
          <Route path="edit/:id" element={<EditBlog/>}/>


          </Route>

        
      </Routes>    
    </Router>
    </>
);
}

export default App
