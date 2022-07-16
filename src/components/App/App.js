import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="body">
      <Header/>
      <Routes>
        <Route path="/signup" element={
          <Register/>
        }/>
        <Route path="/signin" element={
          <Login/>
        }/>
        <Route path="/" element={
          <Main/>
        }/>
        <Route path="/movies" element={
          <Movies/>
        }/>
        <Route path="/saved-movies" element={
          <SavedMovies/>
        }/>
        <Route path="/profile" element={
          <Profile/>
        }/>
        <Route path="*" element={
          <NotFound/>
        }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
