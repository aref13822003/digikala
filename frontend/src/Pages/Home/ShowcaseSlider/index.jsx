
//react redux
import React, { useEffect, useRef, useState } from "react";
//  Swiper  components //style // module
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
//mui
import { Typography } from "@mui/material";
//hooks
import fetchApi from "../../../utils/fetchApi";

export default function App() {
  // elemnts


  //states
  const [showCaseData,setShowCaseData]=useState()

  //fetchs
useEffect(()=>{
  (async()=>{
    const data=await fetchApi(process.env.REACT_APP_BASE_API+'show-case-sliders?populate=*')
   
    setShowCaseData(data.data)
  })()
},[])


// maps
const showCaseSlider=showCaseData?.map((e, index)=>{
  const price=+(e?.attribute?.price)
  const discount=1-Number(e?.attribute?.off/100) 
  const discontPrice=price*+discount
  return   <SwiperSlide
  key={index}
  style={{
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    paddingTop:"4px",
margin:'10px 0',
   height:'80%'
  }}

>
  <img src={process.env.REACT_APP_BASE_URL+e?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url   } alt="product image" style={{  display: "block",
width:" 100%",
height:" 50%",
objectFit: "cover",}}></img>
  <Typography> {discontPrice}</Typography>
  <Typography>{price}</Typography>
</SwiperSlide>
})
  return (
    <>
      <Swiper
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
   
        className="mySwiper"
        style={{ width: "85%", height: "40vh",background:'#e6123d',  borderRadius:'8px',marginTop:'10px', }}
      >
      
{showCaseSlider}
      
      </Swiper>

     
    </>
  );
}
