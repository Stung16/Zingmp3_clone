import React, { useState } from "react";
import "./footer.css";
const Footer = () => {
  const [show, setShow] = useState(false);
  const dataPartner = [
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/ingrooves.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/stone-music.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/genie.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/kakao.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/route-note.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/danal.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/believe.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png",
    "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png",
  ];
  return (
    <div className="mt-[48px] text-center">
      <h3 className="title-partner ">
        <span
          className="hover:text-[#9b4de0] cursor-pointer select-none"
          onClick={() => {
            setShow(true);
          }}
        >
          Đối tác âm nhạc
        </span>
      </h3>
      <div className="partner px-10">
        {dataPartner?.map((i, c) => {
          return (
            <div
              key={c}
              className="xl:w-[12.5%] xl:px-[10px] mb-[30px] partner-item lg:w-[25%]"
            >
              <div className="partner-item-inner">
                <div className="content-inner">
                  <figure className="image">
                    <img src={`${i}`} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {show && (
        <div className="zm-portal-modal">
          <div
            className="overlay-model"
            onClick={() => {
              setShow(false);
            }}
          ></div>
          <div className="modal-isActive">
            <div className="model-content relative">
              <h3 className="title">Đối tác âm nhạc</h3>
              <span className="absolute top-0 right-0">
                <i
                  className="fa-solid fa-x fa-lg text-white cursor-pointer"
                  onClick={() => {
                    setShow(false);
                  }}
                ></i>
              </span>
              {dataPartner?.map((i, c) => {
                return (
                  <div
                    key={c}
                    className="xl:w-[20%] xl:px-[10px] mb-[30px] partner-item lg:w-[25%]"
                  >
                    <div className="partner-item-inner">
                      <div className="content-inner">
                        <figure className="image">
                          <img src={`${i}`} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
