const BASE_URL = 'https://api.bobbydorfman.movies.nomoredomains.xyz'
// const BASE_URL = "http://localhost:3001"

export const getSavedMovies = (jwt) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${jwt}`,
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
  })
    .then(checkAnswer)
}

export const saveMovies = (movie, jwt) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${jwt}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: movie.country ?? '1',
      description: movie.description,
      director: movie.director,
      duration: movie.duration,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      nameEN: movie.nameEN ?? movie.nameRU,
      nameRU: movie.nameRU,
      trailerLink: movie.trailerLink
        ? movie.trailerLink
        : `https://www.youtube.com/results?search_query=трейлер+${movie.nameRU}`,
      year: movie.year,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    })
  })
    .then(checkAnswer)
}

export const deleteMovie = (movie, jwt) => {
  return fetch(`${BASE_URL}/movies/${movie._id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${jwt}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(checkAnswer)
}

// Проверка ответа
const checkAnswer = (res) => {
  if (res.ok){
    return res.json();}
  return Promise.reject(res)
}