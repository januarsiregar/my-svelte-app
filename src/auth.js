// src/auth.js - Enhanced authentication helper
export function isLoggedIn() {
  try {
    // Check if we're in browser environment
    if (typeof localStorage === 'undefined') {
      console.warn('localStorage not available');
      return false;
    }
    
    const authStatus = localStorage.getItem('auth');
    const isAuthenticated = authStatus === 'true';
    
    console.log('Authentication check:', isAuthenticated);
    return isAuthenticated;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}

export function login(username, password) {
  try {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('loginTime', new Date().toISOString());
      console.log('User logged in successfully');
      return { success: true, message: 'Login successful' };
    }
    return { success: false, message: 'Invalid credentials' };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Login failed' };
  }
}

export function logout() {
  try {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    localStorage.removeItem('loginTime');
    console.log('User logged out successfully');
    return { success: true, message: 'Logout successful' };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, message: 'Logout failed' };
  }
}

export function getUsername() {
  try {
    return localStorage.getItem('username') || 'User';
  } catch (error) {
    console.error('Error getting username:', error);
    return 'User';
  }
}

export function getLoginTime() {
  try {
    const loginTime = localStorage.getItem('loginTime');
    return loginTime ? new Date(loginTime) : null;
  } catch (error) {
    console.error('Error getting login time:', error);
    return null;
  }
}

export function isSessionValid() {
  try {
    if (!isLoggedIn()) {
      return false;
    }
    
    const loginTime = getLoginTime();
    if (!loginTime) {
      return false;
    }
    
    // Check if session is older than 24 hours (optional)
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const now = new Date();
    const sessionAge = now.getTime() - loginTime.getTime();
    
    if (sessionAge > twentyFourHours) {
      console.log('Session expired');
      logout();
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error validating session:', error);
    return false;
  }
}

// Navigation helper functions
export function redirectToLogin() {
  if (typeof window !== 'undefined') {
    window.location.hash = '/login';
  }
}

export function redirectToDashboard() {
  if (typeof window !== 'undefined') {
    window.location.hash = '/dashboard';
  }
}