import { useState } from "react";
import "./header.css";
import { searchSliece } from "../../../stores/slices/searchSliece";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import LogIn from "../../../components/Btn/LogIn/LogIn";
import { toast } from "react-toastify";
import { search } from "../../../services/music.services";

const { getDataSearch } = searchSliece.actions;

function Header() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!value.trim()) {
      toast.warning("Vui lòng nhập từ khóa tìm kiếm!");
      return;
    }

    try {
      setLoading(true);
      const response = await search(value);
      const data = await response.json();

      if (data?.err === 0) {
        dispatch(getDataSearch(data?.data));
        navigate(`/tim-kiem/tat-ca?q=${value}`);
      } else {
        toast.error("Không tìm thấy kết quả!");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại!");
      console.error(error);
    } finally {
      setLoading(false);
      setValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoNext = () => {
    window.history.forward();
  };

  return (
    <header className="zm-header bg-[#241b31] opacity-[0.97] isRight-header">
      {loading && <Loading />}
      <div className="level">
        <div className="level-left">
          <button
            className={`zm-btn-header ${
              window.history.length <= 1 && "pointer-events-none"
            }`}
            onClick={handleGoBack}
          >
            <i
              className={`fa-solid fa-arrow-left fa-lg text-white ${
                window.history.length <= 1 && "text-[#eeeeee90]"
              }`}
            />
          </button>
          <button
            className={`zm-btn-header ${
              window.history.length <= 1 && "pointer-events-none"
            }`}
            onClick={handleGoNext}
          >
            <i className={`fa-solid fa-arrow-right fa-lg text-white`}></i>
          </button>
          <div className="search">
            <div className="search__container">
              <button
                className="zm-btn-header btn-search"
                onClick={handleSearch}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <div className="input-wrapper">
                <input
                  type="text"
                  className="form-control z-input-placeholder outline-none"
                  placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="level-right">
          <div
            className="setting-item"
            onClick={() => {
              toast.warning("Chức năng sẽ sớm được hoàn thiện");
            }}
          >
            <button className="btn-setting hover">
              <i className="fa-solid fa-gear"></i>
            </button>
          </div>
          <div className="setting-item">
            <button className="btn-setting hover relative group">
              <i className="fa-solid fa-user"></i>
              <div className="board-login hidden group-focus:block">
                <LogIn />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
