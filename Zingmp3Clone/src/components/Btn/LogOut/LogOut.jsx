import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Loading/Loading";

const LogOut = () => {
  const { logout, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(false);
  return (
    <>
      {isAuthenticated && (
        <div
          className="flex items-center gap-4 p-[10px] hover:text-[#fff] hover:bg-[hsla(0,0%,100%,0.1)]"
          onClick={() => {
            setLoading(true);
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            });
          }}
        >
          <span>
            <i className="text-white text-xl fa-solid fa-arrow-right-from-bracket"></i>
          </span>
          <p className="text-[#dadada]">Đăng xuất</p>
        </div>
      )}
      {loading && <Loading />}
    </>
  );
};

export default LogOut;
