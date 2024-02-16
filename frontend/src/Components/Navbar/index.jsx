import { Box, Hidden, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useDispatch, useSelector } from "react-redux";
import { showNav, hideNav } from "../../store/Slices/navChange/showNav";
import SearchIcon from '@mui/icons-material/Search';
export default function Navbar({}) {
  const { navBar } = useSelector((state) => state.nav);
  const Dispatch = useDispatch();
  return (
    <>
      {/*start top header */}
      <Stack
        sx={{
          maxWidth: "1676",
          minWidth: "1009",

          margin: "0px auto",
          padding: "12px 14px",
        }}
        dir="rtl"
        flexDirection={"row"}
        alignItems="center"
        justifyContent='space-between'
      >
        {/*start right side */}
        <Stack flexDirection={"row"} sx={{ width: "50%" ,position:'relative'}} alignItems="center" >
          {/* logo */}
          <Link
            to={"./"}
            sx={{
              backgroundSize: "contain",
              display: "block",
              width: 120,
              height: 30,
            }}
            ml={10}
          >
            logo
          </Link>
          {/* search icon */}
         <SearchIcon sx={{position:'absolute',right:'50px', zIndex:'1000' ,fontWeight:'500' ,color:'#a1a3a8'}} dir='rtl' />
          {/*search input */}

          <Box
            sx={{
              marginRight: { md: "10px" },
              width: 500,
              maxWidth: "100%",
              width: "70%",
              padding: "16px 0px 16px 0px",

              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden,",
              fontSize: { md: "1.2rem", sm: "1.1rem", xs: "1.1rem" },
              fontWeight: 400,
              lineHeight: 2.17,
            }}
            borderRadius="8px"
            dir="rtl"
          >
            <TextField
              sx={{
                background: "#f0f0f1",
                border: "none",
                outline: "none",
                padding: "0px 45px 0px 1px",
                border: "none",
              }}
              border="none"
              fullWidth
              placeholder="جستجو کنید"
              outline="none"
              borderRadius="8px"
              dir="rtl"
            />
          </Box>
        </Stack>
        {/* end right side */}

        {/* start left side */}
        <Stack
          flexDirection={"row"}
         
          alignItems={"center"}
        >
          {/* login log out */}

          <Link
            to={"/login-register"}
            sx={{ padding: "10px 12px" }}
         
          >
            {" "}
            <Box
              sx={{
                border: "1px solid",
                padding: "10px 12px",
                width: { md: "134px" },
                height: { md: "40px" },
              }}
              ml={3}
              borderRadius={2}
              display="flex"
              alignItems={'center'}
              justifyContent='space-between'
              
            >
              <Typography
                variant="a"
                component={"a"}
                sx={{ margin: "30px  0", color: "#616161 ", fontSize: "12px" }}
              >
                
                ورود / ثبت نام
              </Typography>
              <ExitToAppOutlinedIcon
                sx={{ color: "#616161 ", alignItems: "start" } }
                
              />
            </Box>
          </Link>

          {/* shopping cart */}
         
            <Link to={"/shopping-list"}>
            <Box pr={"10px"} sx={{ borderRight: "1px solid #e0e0e2" }}>
              <ShoppingCartOutlinedIcon sx={{ color: "#616161 " }} dir="rtl" />
               </Box>
            </Link>
         
        </Stack>
        {/* end left side */}
      </Stack>
      {/* end top header */}
    </>
  );
}
