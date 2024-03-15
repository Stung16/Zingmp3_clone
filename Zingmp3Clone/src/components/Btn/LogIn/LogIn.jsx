import React from "react";
import Loading from "../../Loading/Loading";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
  const { isLoading, error, loginWithPopup, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      className="login"
      onClick={() => {
        loginWithPopup();
      }}
    >
      Đăng nhập
    </div>
  );
};

export default LogIn;
