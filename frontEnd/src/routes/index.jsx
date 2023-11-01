import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import AuthorList from '../pages/AuthorList'
import BooksList from '../pages/BooksList'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login';
import ProtectedRoute from "../utils/ProtectedRoute";

const  Router = ({isAuth,setIsAuth}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setIsAuth={setIsAuth}/>}/>
            <Route path="/authors" element={<ProtectedRoute isAuth={isAuth}><AuthorList /></ProtectedRoute>}/>
            <Route path="/books" element={<ProtectedRoute isAuth={isAuth}><BooksList /></ProtectedRoute>}/>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Router