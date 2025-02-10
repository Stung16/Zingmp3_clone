import React, { useEffect } from "react";
import { getArrSlider } from "../../utils/fn";
import { useDispatch } from "react-redux";
import { songSlices } from "../../stores/slices/songSlices";
const { updateCurrentSong, updateNext, updatePrev, checkPlay } =
  songSlices.actions;
import { useNavigate } from "react-router-dom";
import { Card, Skeleton } from "@nextui-org/react";

const SlideAlbum = ({ dataSlice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    let min = 0;
    let max = 2;
    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length - 1);
      for (let i = 0; i < sliderEls.length; i++) {
        // Delete classnames (css)
        sliderEls[i]?.classList?.remove(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
        sliderEls[i]?.classList?.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        sliderEls[i]?.classList?.remove(
          "animate-slide-left2",
          "order-2",
          "z-10"
        );

        // Hide or Show images
        if (list.some((item) => item === i)) {
          sliderEls[i].style.cssText = `display: block`;
        } else {
          sliderEls[i].style.cssText = `display: none`;
        }
      }
      // Add animation by adding classnames
      list.forEach((item) => {
        if (item === max) {
          sliderEls[item]?.classList?.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === min) {
          sliderEls[item]?.classList?.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          sliderEls[item]?.classList?.add(
            "animate-slide-left2",
            "order-2",
            "z-10"
          );
        }
      });
      min = min === sliderEls.length - 1 ? 0 : min + 1;
      max = max === sliderEls.length - 1 ? 0 : max + 1;
    }, 3000);
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  const handlegetSongId = (item) => {
    if (item.type === 1) {
      dispatch(updateCurrentSong(item?.encodeId));
      dispatch(updateNext(false));
      dispatch(updatePrev(false));
      dispatch(checkPlay(true));
    } else {
      let parts = item.link.split("/");
      let result = parts.slice(2, 3).join("");
      navigate(`/album/${result}/${item?.encodeId}`);
    }
  };
  return (
    <div className="mt-[70px] pt-[32px] overflow-hidden w-full  ">
      <div className="flex w-full gap-8 ">
        {dataSlice?.map((item, index) => {
          return (
            <img
              key={index}
              src={item.banner}
              onClick={() => handlegetSongId(item)}
              className={`slider-item flex-1  w-[30%] h-full object-cover rounded-lg cursor-pointer ${
                index <= 2 ? "block" : "hidden"
              }`}
            />
          );
        })}
      </div>
      {!dataSlice && (
        <div className="flex w-full gap-8 ">
          <Card className="w-1/3 space-y-5 p-4 h-[200px]" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </Card>
          <Card className="w-1/3 space-y-5 p-4 h-[200px]" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </Card>
          <Card className="w-1/3 space-y-5 p-4 h-[200px]" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SlideAlbum;
