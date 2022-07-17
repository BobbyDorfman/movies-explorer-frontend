class MoviesApi {
  constructor(config) {
    this._url = config._url;
    this._headers = config.headers;
  }

  // Проверка ответа
  _checkAnswer(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(console.log(`Ошибка: ${res.status}`))
  }

  // Получение токена
  _getToken() {
    const jwt = localStorage.getItem("jwt");
    return {
      Authorization: `Bearer ${jwt}`,
      ...this._headers
    }
  }

  // Добавление фильмов на страницу с сервера
  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._getToken()
    })
    .then((res) => {
      return this._checkAnswer(res)
    })
  }
}

const moviesApi = new MoviesApi({
  // url: 'http://localhost:3001',
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;