// src/auth.js
export function isLoggedIn() {
  return localStorage.getItem('auth') === 'true';
}
