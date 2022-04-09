import React from 'react';

import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import AuthTemplate from '../components/templates/AuthTemplate';
import { usePathname } from '../hooks/useLocation';

const AuthPage = () => {
  const pathname = usePathname();
  const title =
    pathname === "/sign-up" ? "Sign Up to Mollo" : "Sign in to Mollo";
  const details =
    pathname === "/sign-up"
      ? "Please enter your Mollo password and the email address associated with your account to sign in."
      : "Please enter your Mollo password and the email address associated with your account to sign in.";
  return (
    <div>
      <AuthTemplate
        title={title}
        details={details}
        path={pathname === "/sign-up" ? "signup" : "signin"}
      >
        {pathname === "/sign-up" ? <SignUp /> : <SignIn />}
      </AuthTemplate>
    </div>
  );
};

export default AuthPage;
