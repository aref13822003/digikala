import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import fetchApi from "../../../utils/fetchApi";
import { Padding } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ShowCaseSlider() {
  const [showCase, setShowCase] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchApi(
        process.env.REACT_APP_BASE_API + "show-case-sliders?populate=*"
      );
      setShowCase(data?.data);
    })();
  });
  const showCaseData = showCase?.map((e, index) => (
    <SwiperSlide
      key={index}
      style={{
        Padding: "12px",
        width: "154px",
        background: "#fff",
        margin: "20px 0 0 30px",
        height: "80%",
        padding: "20px",
      }}
    >
      <Link to="/*">
        <image
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url
          }
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "70%",
            objectFit: "cover",
          }}
        />
        <Typography variant="h5" sx={{ color: "black" }}>
          {" "}
          {parseInt(e?.attributes?.price * (1 - e?.attributes?.off / 100))}{" "}
          تومان
        </Typography>
        <Typography
          variant="h6"
          style={{ textDecoration: "line-Through" }}
          sx={{ color: "black" }}
        >
          {" "}
          {e?.attributes?.price}{" "}
        </Typography>
      </Link>
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            Padding: "12px",
            width: "154px",
            background: "#fff",
            margin: "20px 0 0 30px",
            height: "80%",
            padding: "20px",
          }}
        >
          <Link to="/*">
            <image
              src={''
                // process.env.REACT_APP_BASE_URL +
                // e?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url
              }
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "70%",
                objectFit: "cover",
              }}
            />
            <Typography variant="h5" sx={{ color: "black" }}>
              {/* {" "}
              {parseInt(
                e?.attributes?.price * (1 - e?.attributes?.off / 100)
              )}{" "} */}
              تومان
            </Typography>
            <Typography
              variant="h6"
              style={{ textDecoration: "line-Through" }}
              sx={{ color: "black" }}
            >
              {" "}
              {/* {e?.attributes?.price}{" "} */}
            </Typography>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
