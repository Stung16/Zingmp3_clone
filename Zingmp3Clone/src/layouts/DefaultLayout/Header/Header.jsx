import React, { useState } from "react";
import "./header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { searchSliece } from "../../../stores/slices/searchSliece";

const { getDataSearch } = searchSliece.actions;
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import LogIn from "../../../components/Btn/LogIn/LogIn";
import Infor from "../../../components/Infor/Infor";
import { toast } from "react-toastify";
import { search } from "../../../services/music.services";

function Header() {
  const { isLoading, error, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit = async (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      try {
        setLoading(true);
        const respone = await search(value);
        const data = await respone.json();
        if (data?.err === 0) {
          dispatch(getDataSearch(data?.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setValue("");
        navigate(`/tim-kiem/tat-ca?q=${value}`);
      }
    }
  };
  const handleGoBack = () => {
    window.history.back(); // Điều hướng trở lại trang trước đó
  };
  const handleGoNext = () => {
    window.history.forward(); // Điều hướng trở lại trang trước đó
  };

  return (
    <header className="zm-header bg-[#241b31] opacity-[0.97] isRight-header">
      {loading && <Loading />}
      <div className="level">
        <div className="level-left">
          <button className="zm-btn-header" onClick={handleGoBack}>
            <i className="fa-solid fa-arrow-left fa-lg" />
          </button>
          <button className="zm-btn-header" onClick={handleGoNext}>
            <i className="fa-solid fa-arrow-right fa-lg"></i>
          </button>

          <div className="search">
            <div className="search__container">
              <button className="zm-btn-header btn-search">
                <i className="fa-solid fa-magnifying-glass "></i>
              </button>
              <div className="input-wrapper">
                <input
                  type="text"
                  className="form-control z-input-placeholder outline-none "
                  placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                  value={value || ""}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyUp={submit}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="level-right">
          <div className="dowload-destop flex items-center hover">
            <span>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.4966 13.4203V13.6633C17.4966 14.5857 16.7489 15.3333 15.8266 15.3333H4.16658C3.24427 15.3333 2.49658 14.5857 2.49658 13.6633V5.00334C2.49658 4.08103 3.24427 3.33334 4.16658 3.33334H9.99658"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4979 11.6247C14.4103 11.7021 14.2955 11.7493 14.1696 11.75C14.1687 11.75 14.1678 11.75 14.1668 11.75C14.1659 11.75 14.165 11.75 14.1641 11.75C14.0382 11.7493 13.9233 11.7021 13.8358 11.6247L10.5043 8.70963C10.2964 8.52779 10.2754 8.21191 10.4572 8.00409C10.6391 7.79627 10.9549 7.77521 11.1628 7.95705L13.6668 10.1481V3.33334C13.6668 3.0572 13.8907 2.83334 14.1668 2.83334C14.443 2.83334 14.6668 3.0572 14.6668 3.33334V10.1481L17.1709 7.95705C17.3787 7.77521 17.6946 7.79627 17.8765 8.00409C18.0583 8.21191 18.0372 8.52779 17.8294 8.70963L14.4979 11.6247Z"
                  fill="currentColor"
                />
                <path
                  d="M6 16.8333H14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span
              onClick={() => {
                toast.warning("Chức sẽ sớm được hoàn thiện");
              }}
            >
              Tải bản Windows
            </span>
          </div>

          <div
            className="setting-item"
            onClick={() => {
              toast.warning("Chức sẽ sớm được hoàn thiện");
            }}
          >
            <button className="btn-setting hover">
              <i className="fa-solid fa-gear"></i>
            </button>
          </div>

          <div className="setting-item">
            {!isAuthenticated ? (
              <button className="btn-setting hover relative group">
                <i className="fa-solid fa-user group-focus:"></i>
                <div className="board-login hidden group-focus:block">
                  <LogIn />
                  <div className="p-[10px]">
                    <h3 className="login_title w-fit">Đăng ký gói</h3>
                    <div className="plus cursor-text">
                      <h2 className="plus-title">
                        <span>Zing MP3</span>
                        <div>
                          <span className="tracking-widest">PLUS</span>
                        </div>
                      </h2>
                      <h3 className="plus-h3 ">Chỉ từ 11.000 đ/tháng</h3>
                      <h3 className="plus-subtitle ">
                        Nghe nhạc với chất lượng cao nhất, không quảng cáo
                      </h3>
                      <span
                        className="see-more cursor-pointer"
                        onClick={() => {
                          toast.warning("Chức sẽ sớm được hoàn thiện");
                        }}
                      >
                        Tìm hiểu thêm
                      </span>
                    </div>
                    <div className="premium cursor-text">
                      <h2 className="premium-title">
                        <span>Zing MP3</span>
                        <div>
                          <span className="tracking-wides">PREMIUM</span>
                        </div>
                      </h2>
                      <h3 className="premium-h3 ">Chỉ từ 37.500 đ/tháng</h3>
                      <h3 className="premium-subtitle ">
                        Toàn bộ đặc quyền Plus cùng kho nhạc Premium
                      </h3>
                      <span
                        className="see-more cursor-pointer bg-[#dca519]"
                        onClick={() => {
                          toast.warning("Chức sẽ sớm được hoàn thiện");
                        }}
                      >
                        Tìm hiểu thêm
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ) : (
              <Infor />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
