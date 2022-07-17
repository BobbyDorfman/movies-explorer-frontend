class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  // Проверка ответа
  _checkAnswer(res) {
      if (res.ok){
          return res.json();}
      return Promise.reject(res)
  }

  // Получение токена
  _getToken() {
    const jwt = localStorage.getItem("jwt");
    return {
      Authorization: `Bearer ${jwt}`,
      ...this._headers
    }
  }

  // Добавление сохраненных фильмов с сервера
  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._getToken()
    })
    .then(this._checkAnswer)
  }

  // Добавление фильмов с сервера
  addMovies(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._getToken(),
      body: JSON.stringify(movie)
    })
    .then(this._checkAnswer)
  }

  // Удаление фильма
  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._getToken(),
    })
    .then(this._checkAnswer)
  }

  // Загрузка данных профиля с сервера
  getApiUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._getToken(),
    })
    .then(this._checkAnswer)
  }

  // Отправка новых данных профиля на сервер
  patchUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getToken(),
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then(this._checkAnswer)
  }

  // Регистрация
  register(email, password, name) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password, name})
    })
    .then(this._checkAnswer)
  }

  // Авторизация
  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then(this._checkAnswer)
  }


  checkToken(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`
      }
    })
    .then(this._checkAnswer)
  }
}

const mainApi = new MainApi({
  // url: "https://api.movies.kd.nomoredomains.work",
  url: "http://localhost:3001",
  headers: {
    "content-type": "application/json"
  }
});

export default mainApi;
