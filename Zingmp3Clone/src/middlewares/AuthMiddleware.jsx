import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
const AuthMiddleware = () => {
    const { isLoading, error, isAuthenticated } = useAuth0();
    return !isAuthenticated && <Navigate to={"/"} />
};

export default AuthMiddleware;
