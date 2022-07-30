import {useEffect, useState} from "react";
import './App.css';
import {CurrentUserContext} from "../../constexts/CurrentUserContext";
import {Route, Routes, useNavigate} from "react-router-dom";
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
  const [localData, setLocalData] = useState([]);
  const [localSavedData, setLocalSavedData] = useState([]);
  const [savedMoviesFilter, setSavedMoviesFilter] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [moviesNumber, setMoviesNumber] = useState(0);
  const [listLength, setListLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const jwt = localStorage.getItem("jwt")

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

  // Получения данных пользователя, если есть токен
  useEffect(() => {
    if (jwt) {
      auth.getApiUserInfo(jwt)
        .then(res => setCurrentUser(res.user))
        .catch(err => console.log(`Имя пользователя не получено: ${err}`))
    }
  }, [jwt])

  // Добавление фильмо на страницу
  useEffect(() => {
    setIsLoading(true);
    if (jwt) {
      MoviesApi.getMovies()
        .then(res => {
          localStorage.setItem('data', JSON.stringify(res));
          const allMovies = JSON.parse(localStorage.getItem('data'));
          setLocalData(allMovies);
        })
        .catch((err) => {
          console.log(`Фильмы не удалось получить: ${err}`)
        })
        .finally(() => setIsLoading(false));
    }
  }, [jwt])

  useEffect(() => {
    setIsLoading(true);
    if (jwt && currentUser !== null) {
      MainApi.getSavedMovies(jwt)
        .then(res => {
          localStorage.setItem('savedMovies', JSON.stringify(res.filter((i) => i.owner === currentUser._id)))
          const userMovies = JSON.parse(localStorage.getItem('savedMovies'));
          setLocalSavedData(userMovies);
        })
        .catch((err) => {
          console.log(`Сохраненные фильмы не удалось получить: ${err}`)
        })
        .finally(() => setIsLoading(false));
    }
  }, [jwt, currentUser])

  const { width } = useLookWindowSize()

  // Регистрация
  const handleRegister = (input) => {
    auth.register(input)
    .then(() => {
      handleLogin({ email: input.email, password: input.password })
    })
    .then(() => navigate('/movies'))
    .catch((err) => {
      console.log(`Ошибка регистрации: ${err}`)
    })
  }

  // Авторизация
  const handleLogin = (input) => {
    auth.login(input)
    .then((res) => {
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
      return (nameEN && nameEN.toLowerCase().includes(values) && (values !== ''))
      || (nameRU && nameRU.toLowerCase().includes(value) && (values !== ''))
        ? item : null
    });

    localStorage.setItem('filtered', JSON.stringify(sortedMovieSearch));

    setFilteredMovies(sortedMovieSearch)
  }

  // Сохранить поиск
  const handleSearchSaved = (value) => {
    const sortedMovieSearch = localSavedData.filter((card) => {
      const values = value.toLowerCase();
      const nameEN = card.nameEN;
      const nameRU = card.nameRU.toLowerCase();
      return ((nameEN && nameEN.toLowerCase().includes(values)) || (nameRU && nameRU.toLowerCase().includes(value)))
        ? card : null
    });

    localStorage.setItem('savedFilter', JSON.stringify(sortedMovieSearch));
    setSavedMoviesFilter(sortedMovieSearch.length !== 0 ? sortedMovieSearch : localSavedData);
  }

  // Сортировка по длине фильмов
  const durationSwitch = (checked) => {
    const filterMovies = JSON.parse(localStorage.getItem('filtered'));
    if (checked === '1' && filterMovies) {
      const shorts = filterMovies.filter((item) => item.duration <= 40);
      setFilteredMovies(shorts);
    } else {
      setFilteredMovies(filterMovies);
    }
  };

  // Сохранение переключателя
  const savedDurationSwitch = (checked) => {
    const savedFiltered = JSON.parse(localStorage.getItem('savedFilter'));
    if (checked === '1' && savedFiltered) {
      const shorts = savedFiltered.filter((item) => item.duration <= 40);
      setSavedMoviesFilter(shorts);
    } else {
      setSavedMoviesFilter(savedFiltered);
    }
  }

  // Колличество карточек на странице
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
    const like = localSavedData.some((i) =>
      i.movieId === card.id
    );

    if (!like) {
      MainApi.saveMovies(card, jwt).then(res => {
        setLocalSavedData([...localSavedData, res])
      })
    } else {
      const dislike = localSavedData.find((i) => i.movieId === card.id)
      handleDeleteMovie(dislike)
    }
  }

  // Удаление фильма
  const handleDeleteMovie = (card) => {
    MainApi.deleteMovie(card, jwt)
      .then(() => {
        setSavedMoviesFilter(savedMoviesFilter.filter((i) => i._id !== card._id))
        setLocalSavedData(localSavedData.filter(i => i._id !== card._id))
      })
  }

  // Изменение профиля
  const handleEditProfile = (user) => {
    auth.patchUserInfo(jwt, user)
      .then(res => setCurrentUser(res))
      .catch(err => console.log(`При обновлении профиля произошла ошибка: ${err}`))
  }

  // Выход из аккаунта
  const handleOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movieList');
    localStorage.removeItem('data')
    localStorage.removeItem('saveSearchValue')
    localStorage.removeItem('saveCheck')
    setCurrentUser(null)
    setLoggedIn(false);
    setSavedMoviesFilter([])
    setFilteredMovies([])
    setLocalSavedData([])
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <Header loggedIn={loggedIn} useLookWindowSize={useLookWindowSize}/>
        <Routes>
          <Route path="/signup" element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Register submit={handleRegister}/>
            </ProtectedRoute>
          }/>
          <Route path="/signin" element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Login submit={handleLogin}/>
            </ProtectedRoute>
          }/>
          <Route path="/" element={
            <Main/>
          }/>
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Preloader
                  isLoading={isLoading}
                />
                <Movies
                  currentUser={currentUser}
                  listLength={listLength}
                  durationSwitch={durationSwitch}
                  handleSearch={handleSearch}
                  savedMovies={localSavedData}
                  movieCards={filteredMovies}
                  onSave={handleSaveMovie}
                  addMovies={addMovies}
                  onDelete={handleDeleteMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Preloader
                  isLoading={isLoading}
                />
                <SavedMovies
                  movieCards={savedMoviesFilter}
                  durationSwitch={savedDurationSwitch}
                  handleSearch={handleSearchSaved}
                  onDelete={handleDeleteMovie}
                  addMovies={addMovies}
                  savedMovies={savedMoviesFilter}
                  listLength={listLength}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                onSubmit={handleEditProfile}
                signOut={handleOut}
              />
            </ProtectedRoute>
          }/>
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
