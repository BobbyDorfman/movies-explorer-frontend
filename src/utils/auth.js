// export const BASE_URL = 'https://api.bobbydorfman.movies.nomoredomains.xyz'
export const BASE_URL = 'http://localhost:3001'

// Регистрация
export const register = (input) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    })
      .then(checkRes)
}

// Авторизация
export const login = (input) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    })
      .then(checkRes)
}

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    }
  })
    .then(checkRes)
}

// Загрузка данных профиля с сервера
export const getApiUserInfo = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    }
  })
    .then(checkRes)
}

// Отправка новых данных профиля на сервер
export const patchUserInfo = (jwt, user) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email
    })
  })
    .then(checkRes)
}

function checkRes(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(res.status)
}