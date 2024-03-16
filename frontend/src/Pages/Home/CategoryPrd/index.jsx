//mui
import { Box, Stack, Typography } from "@mui/material";
//react redux
import React, { useEffect, useState } from "react";
//hooks
import fetchApi from "../../../utils/fetchApi";
import { Height } from "@mui/icons-material";

export default function CategoriesPrd() {
  //states
  const [categories, setCategories] = useState();
  //fetch
  useEffect(() => {
    (async() => {
      const data =await fetchApi(
        process.env.REACT_APP_BASE_API + "categories?populate=*"
      );
      setCategories(data.data);
    })();
  },[]);
  const categoryItems = categories?.map((e, index) => {
    return <Box key={index} sx={{ width: { xs: "40%", md: "20%" }, height: "50%",margin:'10px 20px' }}>
      <Box sx={{width:{md:'90%'}}}>
        <img
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data[0]?.attributes?.url
          }
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography>{e?.attributes?.name}</Typography>
    </Box>;
  });
  return (
    <Stack
      sx={{
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf:'center',
        justifyContent: "center",
        height: "30vh",
        flexWrap:{md:"nowrap",xs:"wrap"}
      
      }}
      mx={'5%'}
    >
      {console.log(categories)}
      {categoryItems}
    </Stack>
  );
}
