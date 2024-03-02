import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

// //////////////////
// react and redux
import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../../utils/fetchApi";
import { showNav, hideNav } from "../../store/Slices/navChange/showNav";
import { logout } from "../../store/Slices/Auth/Auth";
// mui react router dom

import { Box, Stack, TextField, Typography } from "@mui/material";

import { Link } from "react-router-dom";
// icons
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopAppBar() {
  // responsive

  // states
  const [logo, setLogo] = React.useState();
  // fetches

  React.useEffect(() => {
    (async () => {
      const data = await fetchApi(
        process.env.REACT_APP_BASE_API + "logos?populate=*"
      );
      setLogo(data.data[0].attributes.logo.data[0].attributes.url);
    })();
  }, []);

  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  //   elements
  const Dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#fff" }}>
        <Toolbar>
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
            <img src={process.env.REACT_APP_BASE_URL + `${logo}`} alt="" />
          </Link>
          {/* sreach */}
          <Search
            sx={{
              background: "#f0f0f1",
              marginRight: { md: "10px" },
              maxWidth: "100%",
              width:{xs:'100%',},
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden,",
              fontSize: { md: "1.2rem", sm: "1.1rem", xs: "1.1rem" },
              fontWeight: 400,
              borderRadius: "8px",
              display:{xs:'block', md:'flex'}
            }}
          >
            <SearchIconWrapper>
            <SearchIcon
            sx={{
              position: "absolute",
              right: "15px",
              zIndex: "1000",
              fontWeight: "500",
              color: "#a1a3a8",
            }}
            dir="rtl"
          />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ background: "#f0f0f1",  padding: {xs: "0px 90px 0px 150px",md:"0px 60px 0px 160px"},borderRadius: "8px",color:'Black' }}
              placeholder="جستجو کنید..."
              inputProps={{ "aria-label": "search" }}
              fullWidth
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          {/* login/ register */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {!token ? (
              <Link to={"/login-register"} sx={{ padding: "10px 12px" }}>
                {" "}
                <Box
                  sx={{
                    border: "1px solid",
                    padding: "10px 12px",
                    width: { md: "134px" },
                    height: { md: "40px" },
                    borderRadius: 2,
                  }}
                  ml={3}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="space-between"
                >
                  <Typography
                    variant="a"
                    component={"a"}
                    sx={{
                      margin: "30px  0",
                      color: "#616161 ",
                      fontSize: "12px",
                    }}
                  >
                    ورود / ثبت نام
                  </Typography>
                  <ExitToAppOutlinedIcon
                    sx={{ color: "#616161 ", alignItems: "start" }}
                  />
                </Box>{" "}
              </Link>
            ) : (
              <Box
                sx={{
                  border: "1px solid",
                  padding: "10px 12px",
                  width: { md: "134px" },
                  height: { md: "40px" },
                  borderRadius: 2,
                }}
                ml={3}
                display="flex"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Typography
                  variant="a"
                  component={"a"}
                  sx={{
                    margin: "30px  0",
                    color: "#616161 ",
                    fontSize: "12px",
                  }}
                  onclick={Dispatch(logout)}
                >
                  خروج از حساب کاربری
                </Typography>

                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>

                <PersonOutlineIcon
                  sx={{ color: "#616161 ", alignItems: "end" }}
                />
              </Box>
            )}
          </Box>
          {/* shopping list card */}
          <Link to={"/shopping-list"}>
            <Box
              pr={"10px"}
              sx={{
                borderRight: "1px solid #e0e0e2",
                display: { xs: "none", md: "flex" },
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ color: "#616161 " }} dir="rtl" />
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
