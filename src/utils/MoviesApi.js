const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies"

export function getMovies() {
  return fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    }
  })
    .then(checkAnswer)
}

function checkAnswer(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status)
}