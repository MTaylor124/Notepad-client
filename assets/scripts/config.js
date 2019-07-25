'use strict'

let apiUrl
const apiUrls = {
  production: 'https://mtaylor-notepad.herokuapp.com',
  development: 'https://mtaylor-notepad.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
