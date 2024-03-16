//react  redux

import React, { useEffect, useState } from "react";

import Slider from "./Slider";

import { styled } from "@mui/material/styles";

// component

import ShowCaseSlider from "./ShowcaseSlider";
import CategoriesPrd from "./CategoryPrd";
//hooks

import fetchApi from "../../utils/fetchApi";

// mui

import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

import { Hidden, Stack, Typography } from "@mui/material";

// icons




export default function Home() {
  // elements

  const [categoryMenu, setCategoryMenu] = useState();

  const [add, setAdd] = useState();
const [addSlide,setAddSlide]=useState()
  //fetches

  useEffect(() => {
    (async () => {
      const categoryData = await fetchApi(
        process.env.REACT_APP_BASE_API + "categories?populate=*"
      );

      setCategoryMenu(categoryData.data);
    })();

    (async () => {
      const adds = await fetchApi(
        process.env.REACT_APP_BASE_API + "adds?populate=*"
      );

      setAdd(adds.data);
    })();
    (async () => {
      const addSlide = await fetchApi(
        process.env.REACT_APP_BASE_API + 'ad-sliders?populate=*'
      );

      setAddSlide(addSlide.data);
    })();
  }, []);

  //map elements

  const categoriesOptions = categoryMenu?.map((e, index) => (
    <Grid
      item
      lg={2}
      xs={6}
      md={4}
      key={index}
      style={{
        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",

          height: "70px",

          width: "70px",
        }}
        mb={2}
      >
        <img
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data[0]?.attributes?.url
          }
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Typography style={{ textAlign: "center" }}>
        {e?.attributes?.name}
      </Typography>
    </Grid>
  ));

  const addsItem = add?.map((e, index) => (

      <Box sx={{ borderRadius: "8px", width: "400px", height: "400px" ,margin:'10px 30px'}}>
        <img
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.url
          }
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
  
  ));

  const addSlideImage=addSlide?.map((e,index)=>< img 
  src={process.env.REACT_APP_BASE_URL+e?.attributes?.image?.data?.attributes?.url}
  alt="addSlider"
key={index}

style={{width:'100%', height:'100%',objectFit:'cover'}}
/>
  )
  return (
    <>
      {/* story */}

      <Stack
        sx={{ width: "100% ", height: "20vh", background: "blue" }}
      ></Stack>

      {/* slider */}

      <Slider></Slider>

      {/* showcase slider */}

      <ShowCaseSlider />
      {/* adds */}
      <Stack>
        <Box sx={{width:'90%', alignSelf:"center",margin:'20px 0 0 0 ' }}>
          {addSlideImage}
        </Box>
        <Stack sx={{flexDirection:{xs:'column', md:'row'}, margin:'10px',alignItems:"center"}}>
          {addsItem}
        </Stack>
      </Stack>


      {/* category prd */}
      <CategoriesPrd/>
    </>
  );
}

// <>

//   {/* start slider */}

//   <Slider url={"sliders?populate=*"} />

//   {/* end slider */}

//   {/*start show case */}

//   <ShowCaseSlider style={{ margin: "20px 30px 20px 30px" }} />

//   {/*end show case */}

//   {/* start categories sliders */}

//   <Stack

//     sx={{

//       gap: "3em 2em",

//       width: "100%",

//       height: "30vh",

//       margin: "35px 40px 0 40px",

//       overflow: "hidden",

//     }}

//   >
