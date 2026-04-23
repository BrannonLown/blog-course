import { Route, Routes } from 'react-router';
import './App.css';
import IndividualBlogPost from './components/Blog/IndividualBlogPost';
import ContactPage from './components/contact/ContactPage';
import PostList from './components/postList/PostList';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import { AuthProvider } from './components/authWrapper/AuthProvider';


function App() {
  return(
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:post_id" element={<IndividualBlogPost />} />
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
