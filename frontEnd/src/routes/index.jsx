import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import AuthorList from '../pages/AuthorList'
import BooksList from '../pages/BooksList'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login';

const  Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/authors" element={<AuthorList />}/>
            <Route path="/books" element={<BooksList />}/>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Router