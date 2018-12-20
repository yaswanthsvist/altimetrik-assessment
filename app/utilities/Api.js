export const loginUserApi = (username, password) =>
  fetch(
    `http://localhost:4001/login/?username=${username}&password=${password}`
  )
export const signupUserApi = userDetails =>
  fetch(`http://localhost:4001/signup`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...userDetails }),
  })
export const getUserDataApi = username =>
  fetch(`http://localhost:4001/getData/?username=${username}`)
