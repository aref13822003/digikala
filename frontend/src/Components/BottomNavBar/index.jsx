import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ListItem } from "@mui/material";
const pages = [
  "شگفت انگیز ها",
  "سوپر مارکت",
  "کارت هدیه",
  "تخفیف وپیشنهاد ها",
  "پر فروش ترین ها",
  "  سوالی دارید؟",
  "!در دیجیکالا بقروشید",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function BottomAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "#fff", display: { xs: "none", md: "flex" } }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                fontWeight: 600,
                fontsize: "12px",
                display: "flex",
                alignItems: "center",
                borderLeft: "1px solid #f0f0f1",
                paddingLeft: "15px",
              }}
            >
              <MenuIcon sx={{ padding: "1px" }} />
              دسته بندی کالا
            </Button>

            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#616161",
                  display: "block",
                  my: 2,
                  fontWeight: 600,
                  fontsize: "12px",
                  display: "flex",
                  alignItems: "center",

                  paddingLeft: "15px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 ,mt: "45px", color: "black", zIndex: 1000,
          display:"flex" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",}}>
     
          <LocationOnIcon ml={2} sx={{ fontFamily: "400" }} />
              <Typography
                variant="body2"
                style={{
                  color: "#3F4064",
                  fontWeight: 300,
                  fontsize: "18px",
                  lineHeight: "30px",
                }}
              >
                لطفا شهر و استان خود را انتخاب کنید
              </Typography>
         
         
              
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default BottomAppBar;
