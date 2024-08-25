import React from 'react';
import { useGoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const onSuccess = (response) => {
    console.log('Login Success:', response.profileObj);
    // Redirect to OneBox after successful login
    window.location.href = '/onebox';
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: 'YOUR_GOOGLE_CLIENT_ID',
    isSignedIn: true,
  });

  return (
    <button onClick={signIn} className="bg-blue-500 text-white py-2 px-4 rounded">
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
