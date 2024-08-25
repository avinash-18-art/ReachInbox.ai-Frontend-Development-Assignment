export const saveToken = (token) => {
  localStorage.setItem('accessToken', token);
};

export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const clearToken = () => {
  localStorage.removeItem('accessToken');
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const handleGoogleLoginSuccess = (response) => {
  const token = response.tokenId;
  saveToken(token);
  // Optionally, you can also save the user's profile information
  localStorage.setItem('userProfile', JSON.stringify(response.profileObj));
};

export const handleGoogleLogout = () => {
  clearToken();
  localStorage.removeItem('userProfile');
  // Redirect to login or homepage
  window.location.href = '/login';
};
