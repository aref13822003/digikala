import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import fetchApi from "../../../utils/fetchApi";
import Skeleton from "@mui/material/Skeleton";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default function Slider({ url }) {
  const [slide, setSlide] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchApi(process.env.REACT_APP_BASE_API + url);
      setSlide(data?.data);
    })();
  }, []);

  const sliderItems = slide?.map((e, index) => (
    <SwiperSlide key={index}>
      <img
        src={
          process.env.REACT_APP_BASE_URL +
          e?.attributes?.slider?.data?.attributes?.url
        }
        style={{ width: "100%", height: "100%" }}
        alt=""
      />
    </SwiperSlide>
  ));

  return (
    <>
      {slide ? (
        <Box sx={{ height: { lg: "50vh", md: "40vh", sm: "40vh" } }}>
          <Swiper   style={{ height: "100%" }}   slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
            {sliderItems}
          </Swiper>
        </Box>
      ) : (
        //{start loading}
        <Box sx={{ width: '100%' ,height: { lg: "50vh", md: "40vh", sm: "40vh" } }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
    </>
  );
}

