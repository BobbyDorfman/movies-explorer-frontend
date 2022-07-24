import {useEffect, useState} from "react";
import './App.css';
import {CurrentUserContext} from "../constexts/CurrentUserContext";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import useLookWindowSize from "../../hooks/useLookWindowSize";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import * as auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [movieCards, setMovieCards] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [localData, setLocalData] = useState([]);
  const [moviesNumber, setMoviesNumber] = useState(0);
  const [listLength, setListLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const jwt = localStorage.getItem("jwt")

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true)
          }
        })
        .catch((err) => {
          console.log(`Токен не передан или передан не в том формате. Ошибка: ${err}`)
        })
    }
  }, [jwt])

  useEffect(() => {
    if (jwt) {
      auth.getApiUserInfo(jwt)
        .then(res => setCurrentUser(res.user))
        .catch(err => console.log(`Имя пользователя не получено: ${err}`))
    }
  }, [loggedIn, jwt])

  // Добавление фильмо на страницу
  useEffect(() => {
    setIsLoading(true);
    if (jwt && (location.pathname === '/movies')) {
      MoviesApi.getMovies()
        .then(res => {
          localStorage.setItem('data', JSON.stringify(res));
          if (location.pathname === '/movies') {
            const allMovies = JSON.parse(localStorage.getItem('data'));
            setLocalData(allMovies);
          }
        })
        .catch((err) => {
          console.log(`Фильмы не удалось получить: ${err}`)
        })
        .finally(() => setIsLoading(false));
    }
  }, [jwt, location])

  useEffect(() => {
    setIsLoading(true);
    if (jwt && (location.pathname === '/saved-movies')) {
      MainApi.getSavedMovies(jwt)
        .then(res => {
          localStorage.setItem('savedMovies', JSON.stringify(res.filter((i) => i.owner === currentUser._id)))
          if (location.pathname === '/saved-movies') {
            const userMovies = JSON.parse(localStorage.getItem('savedMovies'));
            setLocalData(userMovies);
          }
        })
        .catch((err) => {
          console.log(`Сохраненные фильмы не удалось получить: ${err}`)
        })
        .finally(() => setIsLoading(false));
    }
  }, [jwt, location, currentUser])

  const { width } = useLookWindowSize()

  // Регистрация
  const handleRegister = (input) => {
    auth.register(input).then(() => {
      navigate('/signin')
    })
    .catch((err) => {
      console.log(`Ошибка регистрации: ${err}`)
    })
  }

  // Авторизация
  const handleLogin = (input) => {
    auth.login(input).then((res) => {
      localStorage.setItem('jwt', res.token)
      setLoggedIn(true)
      navigate("/movies")
    })
    .catch((err) => {
      console.log(`Ошибка входа: ${err}`)
    })
  }

  // Поиск
  const handleSearch = (value) => {
    const sortedMovieSearch = localData.filter((item) => {
      const values = value.toLowerCase();
      const nameEN = item.nameEN;
      const nameRU = item.nameRU.toLowerCase();
      return ((nameEN && nameEN.toLowerCase().includes(values) && (values !== '')) || (nameRU && nameRU.toLowerCase().includes(value) && (values !== '')))
        ? item : null
    });

    localStorage.setItem('filtered', JSON.stringify(sortedMovieSearch));

    if (location.pathname === '/movies') {
      setMovieCards(sortedMovieSearch);
    }

    if (location.pathname === '/saved-movies') {
      setSavedMovies(sortedMovieSearch)
    }
  }

  useEffect(() => {
    const filterMovies = JSON.parse(localStorage.getItem('filtered'));
    if (filterMovies) {
      if (filterMovies.length !== 0) {
        setLocalData(filterMovies);
      } else {
        setLocalData([]);
      }
    }
  }, []);

  const durationSwitch = (checked) => {
    const filterMovies = JSON.parse(localStorage.getItem('filtered'));
    if (!checked && filterMovies) {
      const shorts = filterMovies.filter((item) => item.duration <= 40);
      setMovieCards(shorts);
    } else {
      setMovieCards(filterMovies);
    }
  };

  useEffect(() => {
    if (width >= 1280) {
      setMoviesNumber(3);
      setListLength(12);
    } else if (width >= 768 && width <= 1279) {
      setMoviesNumber(2);
      setListLength(8);
    } else if (width <= 320 && width <= 480) {
      setMoviesNumber(1);
      setListLength(5);
    }
  }, [width])

  // "Ещё"
  const addMovies = () => {
    setListLength(listLength + moviesNumber);
  };

  // Сохранение фильма
  const handleSaveMovie = (card) => {
    MainApi.saveMovies(card, jwt).then(res => {
      setSavedMovies([...savedMovies, res])
    })
  }

  // Удаление фильма
  const handleDeleteMovie = (card) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === card.movieId
      );
    MainApi.deleteMovie(card, jwt).then(() => {
      const newCardArr = savedMovies.filter(
        (item) => item._id !== savedMovie._id
      );
      setSavedMovies(newCardArr)
    })
  }

  // Изменение профиля
  const handleEditProfile = (user) => {
    auth.patchUserInfo(jwt, user)
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err))
  }

  // Выход из аккаунта
  const handleOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movieList');
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <Header loggedIn={loggedIn} useLookWindowSize={useLookWindowSize}/>
        <Routes>
          <Route path="/signup" element={
            <Register submit={handleRegister}/>
          }/>
          <Route path="/signin" element={
            <Login submit={handleLogin}/>
          }/>
          <Route path="/" element={
            <Main/>
          }/>
          {/* <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Preloader
                  isLoading={isLoading}
                />
                <Movies
                  listLength={listLength}
                  durationSwitch={durationSwitch}
                  handleSearch={handleSearch}
                  savedMovies={savedMovies}
                  movieCards={movieCards}
                  onSave={handleSaveMovie}
                  addMovies={addMovies}
                />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/movies" element={
            <>
              <Preloader
                loggedIn={loggedIn}
                isLoading={isLoading}
              />
              <ProtectedRoute
                component={Movies}
                loggedIn={loggedIn}
                listLength={listLength}
                durationSwitch={durationSwitch}
                handleSearch={handleSearch}
                savedMovies={savedMovies}
                movieCards={movieCards}
                onSave={handleSaveMovie}
                addMovies={addMovies}
              />
            </>
          }/>
          <Route path="/saved-movies" element={
            <>
              <Preloader
                loggedIn={loggedIn}
                isLoading={isLoading}
              />
              <ProtectedRoute
                component={SavedMovies}
                loggedIn={loggedIn}
                listLength={listLength}
                durationSwitch={durationSwitch}
                onDelete={handleDeleteMovie}
                handleSearch={handleSearch}
                movieCards={savedMovies}
              />
            </>
          }/>
          {/* <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Preloader
                  isLoading={isLoading}
                />
                <SavedMovies
                    durationSwitch={durationSwitch}
                    handleSearch={handleSearch}
                    onDelete={handleDeleteMovie}
                    movieCards={savedMovies}
                    listLength={listLength}
                  />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/profile" element={
            <>
              <ProtectedRoute
                component={Profile}
                loggedIn={loggedIn}
                onSubmit={handleEditProfile}
                signOut={handleOut}
              />
            </>
          }/>
          {/* <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                onSubmit={handleEditProfile}
                signOut={handleOut}
              />
            </ProtectedRoute>
          }/> */}
          <Route path="*" element={
            <NotFound/>
          }/>
        </Routes>
        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
