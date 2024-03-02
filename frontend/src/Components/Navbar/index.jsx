//components
import TopAppBar from "../TopNavBAr";
// react and redux
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../../utils/fetchApi";

// mui react router dom

import { Box, Stack, TextField, Typography } from "@mui/material";
import useMediaQuery from "@mui/material";
import { Link } from "react-router-dom";

// icons

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import PercentIcon from "@mui/icons-material/Percent";
import BottomAppBar from "../BottomNavBar";


export default function Navbar({}) {
  // elements
  const { navBar } = useSelector((state) => state.nav);

  const Dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  // states
  const [logo, setLogo] = useState();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [showMenu, setShowMenu] = useState(false);
  // fetches

  useEffect(() => {
    (async () => {
      const data = await fetchApi(
        process.env.REACT_APP_BASE_API + "logos?populate=*"
      );
      setLogo(data.data[0].attributes.logo.data[0].attributes.url);
    })();
  }, []);
  // functions
  const handleShowSubmenu = () => {
    setShowMenu(true);
  };
  const handleCloseSubmenu = () => {
    setShowMenu(false);
  };
  const windowWidth=window.innerWidth
    console.log(windowWidth)
   
    if(windowWidth===1000){console.log(helowwwww)}
  return (
    <>
   
     
     <TopAppBar />
    
      {/* start menu header */}
      {/* menu part */}
<BottomAppBar/>
      {/* */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1676",
          minWidth: "1009",
          padding: "0 15px",
          margin: "0 auto",
          borderBottom: ".5px solid #f5f5f5  ",
          display: {
            lg: "flex",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Stack>
          {" "}
          <ul
            id="menu-appbar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              lineHeight: "30px",
            }}
          >
            <li
              style={{
                color: "black",
                fontWeight: 600,
                fontsize: "12px",
                display: "flex",
                alignItems: "center",
                borderLeft: "1px solid #f0f0f1",
                paddingLeft: "15px",
              }}
              onMouseOver={() => {
                handleShowSubmenu();
              }}
              onMouseOut={() => {
                handleCloseSubmenu();
              }}
            >
              <MenuIcon sx={{ padding: "1px" }} />
              دسته بندی کالا
            </li>
            <li>
              <Link
                style={{
                  padding: "10px",
                  display: "block",
                  fontSize: "12px",
                  color: "#616161",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PercentIcon
                  sx={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    padding: "1px",
                  }}
                />
                شگفت انگیز ها
              </Link>
            </li>
            <li>
              <Link
                style={{
                  padding: "10px",
                  display: "block",
                  fontSize: "12px",
                  color: "#616161",
                  fontWeight: 600,
                }}
              >
                سوپر مارکت
              </Link>
            </li>
            <li>
              <Link
                style={{
                  padding: "10px",
                  display: "block",
                  fontSize: "12px",
                  color: "#616161",
                  fontWeight: 600,
                }}
              >
                کارت هدیه
              </Link>
            </li>
            <li>
              <Link
                style={{
                  padding: "10px",
                  display: "block",
                  fontSize: "12px",
                  color: "#616161",
                  fontWeight: 600,
                }}
              >
                تخفیف وپیشنهاد ها
              </Link>
            </li>
            <li>
              <Link
                style={{
                  padding: "10px",
                  display: "block",
                  fontSize: "12px",
                  color: "#616161",
                  fontWeight: 600,
                }}
              >
                {" "}
                پر فروش ترین ها
              </Link>
            </li>
            <li>
              <Link
                style={{
                  padding: "10px",
                  display: "block",
                  fontSize: "12px",
                  color: "#616161",
                  fontWeight: 600,
                }}
              >
                سوالی دارید؟
              </Link>
            </li>
            <li>
              <Link
                style={{
                  padding: "10px",
                  display: "block",
                  fontSize: "12px",
                  color: "#616161",
                  fontWeight: 600,
                }}
              >
                !در دیجیکالا بقروشید
              </Link>
            </li>
          </ul>
        </Stack>
        {/* location part  */}
        <Stack
          alignItems={"center"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <LocationOnIcon ml={2} sx={{ fontFamily: "400" }} />
          <Typography
            variant="body2"
            style={{
              color: "#616161",
              fontWeight: 300,
              fontsize: "18px",
              lineHeight: "30px",
            }}
          >
            لطفا شهر و استان خود را انتخاب کنید
          </Typography>
        </Stack>
      </Stack>
      {/*end menu header */}
     
    </>
  );
}
