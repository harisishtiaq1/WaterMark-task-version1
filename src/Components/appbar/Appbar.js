import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import colorLogo from "../../imgs/color-logo.png";
import whiteLogo from "../../imgs/white-logo.png";

const drawerWidth = 240;
// const navItems = ["Home", "About us", "Pricing","FAQ"];
// const navButton = ({ isActive }) => {
//   return {
//     color: isActive ? "rgb(38 174 240)" : "black",
//     textDecoration: "none",
//     paddingRight: "15px",
//   };
// };
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const logoStyle = {
  width: isSafari ? "10%" : "40%",
};

function DrawerAppBar(
  {
    executeHomeScroll,
    executeAboutScroll,
    executePriceScroll,
    executeFaqScroll,
    executeContactScroll,
  },
  props
) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  React.useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerApp = (
    <Box onClick={handleDrawerToggle} sx={{}}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => executeHomeScroll()}
            sx={{ textAlign: "center" }}
          >
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => executeAboutScroll()}
            sx={{ textAlign: "center" }}
          >
            <ListItemText>About us</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>Pricing</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>FAQ</ListItemText>
          </ListItemButton>
        </ListItem>
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{
              backgroundImage:
                "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",
              color: "white",
              fontSize: "12px",
            }}
          >
            Contact us
          </Button>
        </Box>
      </List>
    </Box>
  );

  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            background: navbar
              ? "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)"
              : "transparent",
            boxShadow: "none",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: { sm: "none", xs: "flex" },
                flexGrow: 1,
              }}
            >
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: "unset", sm: "flex" },
                justifyContent: { xs: "unset", sm: "space-between" },
                width: { xs: "unset", sm: "100%" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  src={navbar ? whiteLogo : colorLogo}
                  sx={{
                    height: { xs: "30px", sm: "38px" },
                    marginRight: "8px",
                  }}
                  style={logoStyle}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    display: { xs: "block", sm: "block" },
                    fontSize: "12px",
                    color: navbar ? "white" : "black",
                  }}
                >
                  Add Watermark
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Button
                    onClick={() => executeHomeScroll()}
                    sx={{ color: navbar ? "white" : "#ccc", fontSize: "12px" }}
                  >
                    Home
                  </Button>
                  <Button
                    onClick={() => executeAboutScroll()}
                    sx={{ color: navbar ? "white" : "#ccc", fontSize: "12px" }}
                  >
                    About us
                  </Button>
                  <Button
                    onClick={() => executePriceScroll()}
                    sx={{ color: navbar ? "white" : "#ccc", fontSize: "12px" }}
                  >
                    Pricing
                  </Button>
                  <Button
                    onClick={() => executeFaqScroll()}
                    sx={{ color: navbar ? "white" : "#ccc", fontSize: "12px" }}
                  >
                    FAQ
                  </Button>

                  <Button
                    onClick={() => executeContactScroll()}
                    sx={{
                      backgroundImage:
                        "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",
                      color: "white",
                      fontSize: "12px",
                    }}
                  >
                    Contact us
                  </Button>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                marginTop: "3rem",
              },
            }}
          >
            {drawerApp}
          </Drawer>
        </Box>
      </Box>
    </Container>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  windows: PropTypes.func,
};

export default DrawerAppBar;
