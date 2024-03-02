import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Hidden, Stack, Typography } from "@mui/material";
import fetchApi from "../../utils/fetchApi";
import { AddBoxSharp } from "@mui/icons-material";
import ShowCaseSlider from "./ShowcaseSlider";

export default function Home() {
  const [categoryMenu, setCategoryMenu] = useState();
  const [add, setAdd] = useState();
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
  }, []);

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
    <Grid
      xs={6}
      md={4}
      lg={2}
      key={index}
      sx={{ borderRadius: "20px", width: "50px", margin: "0 30px" }}
      className="borderBox"
    >
      <Box sx={{ borderRadius: "20px", width: "100", height: "100" }}>
        <img
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.url
          }
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
    </Grid>
  ));
  return (
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
        
    //   </Stack>
    //   {/* end categories sliders */}
    //   {/* start category */}
    //   <Box sx={{ flexGrow: 1, overflow: "Hidden" }} mt={4}>
    //     <Typography
    //       variant="h2 "
    //       mb={5}
    //       sx={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         fontSize: "1.5rem",
    //         fontWeight: "bold",
    //       }}
    //     >
    //       خرید بر اساس دسته‌بندی
    //     </Typography>
    //     <Grid container spacing={2} display={"flex"}>
    //       {/* top */}
    //       {categoriesOptions}
    //       {/*  */}
    //     </Grid>
    //   </Box>

    //   {/*  end category */}
    // </>
    <><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></>
  );
}
