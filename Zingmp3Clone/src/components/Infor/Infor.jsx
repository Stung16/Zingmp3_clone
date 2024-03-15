import React, { Fragment } from "react";
import LogOut from "../Btn/LogOut/LogOut";
import { useAuth0 } from "@auth0/auth0-react";
import "./infor.css";
import { toast } from "react-toastify";

const Infor = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <button className="btn-setting hover relative group">
          <img className="rounded-full" src={user?.picture} alt="" />
          <div className="board-login hidden group-focus:block">
            <div className="flex p-[10px] gap-3  items-center">
              <img
                className="rounded-full w-[64px] h-[64px]"
                src={user?.picture}
                alt=""
              />
              <div className="flex flex-col gap-1 infor-name">
                <span>{user?.name}</span>
                <div className="icon-user">
                  <span className="tracking-wides">BASIC</span>
                </div>
              </div>
            </div>
            <span
              className="update-vip"
              onClick={() => {
                toast.warning("Chức sẽ sớm được hoàn thiện");
              }}
            >
              Nâng cấp tài khoản
            </span>
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
            <div className="sidebar-divide relative h-[1px]"></div>
            <div className="p-[10px]">
              <h3 className="login_title w-fit">Cá nhân</h3>
            </div>
            <ul className="flex  flex-col">
              <li
                className="p-[10px] flex items-center gap-4 hover:bg-[hsla(0,0%,100%,0.1)]"
                onClick={() => {
                  toast.warning("Chức sẽ sớm được hoàn thiện");
                }}
              >
                <span>
                  <i className="text-[#dadada] fa-solid text-xl fa-ban"></i>
                </span>
                <h3 className="text-[#dadada]">Danh sách chặn</h3>
              </li>
              <li
                className="p-[10px] flex items-center gap-4 hover:bg-[hsla(0,0%,100%,0.1)]"
                onClick={() => {
                  toast.warning("Chức sẽ sớm được hoàn thiện");
                }}
              >
                <span>
                  <i className="text-[#dadada] text-xl fa-solid fa-arrow-up-from-bracket"></i>
                </span>
                <h3 className="text-[#dadada]">Tải lên</h3>
              </li>
            </ul>
            <div className="sidebar-divide relative h-[1px]"></div>
            <LogOut />
          </div>
        </button>
      )}
    </>
  );
};

export default Infor;
