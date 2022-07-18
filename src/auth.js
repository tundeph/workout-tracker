import axios from "axios"

function login(email, password) {
  axios
    .post("users/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data) {
        localStorage.setItem("trackfit__token", res.data._id)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

function logout() {
  let token = localStorage.getItem("trackfit__token")
  if (token !== null) {
    localStorage.removeItem("trackfit__token")
  }
}

function isAuthenticated() {
  let token = localStorage.getItem("trackfit__token")
  if (token !== null) {
    return true
  } else {
    return false
  }
}

export { login, logout, isAuthenticated }
