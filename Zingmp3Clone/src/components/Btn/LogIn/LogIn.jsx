import Loading from "../../Loading/Loading";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return <div className="login">Đăng nhập</div>;
};

export default LogIn;
