import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import HomeIcon from '@material-ui/icons/Home';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

import { scroller } from "react-scroll";
import "./ComponentsStyles/navbar.css";
import { NavLink } from "react-router-dom";







const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const ContactUsButtonStyle={
  backgroundColor: 'orange',
  color: "white",
  borderRadius: "0.3em",
  borderWidth: "0",
  width: "80%",
  padding: "6px 0 6px 0"
}

const drawerIcons = [<HomeIcon />, <RoomServiceIcon />, <LocalLibraryIcon />, <ContactSupportIcon />]
const drawerLinks = ["/", "/Services", "/CaseStudy", "/About"]



export default function SwipeableTemporaryDrawer() {
  const anchor = 'right';
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const scrollToSection = () => {
    scroller.scrollTo("contact-info", {
      duration: 800,
      delay: 0,
      smooth: "easeOutQuad",
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="mt-5">
        {['Home', 'Services', 'Case Studies', 'About us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{drawerIcons[index]}</ListItemIcon>
            <NavLink
                exact
                className="nav-link active"
                aria-current="page"
                to={drawerLinks[index]}
                activeClassName="current"
              >
                {text}
              </NavLink>
          </ListItem>
        ))}
        <button style={ContactUsButtonStyle} onClick={scrollToSection}  className='mt-4 mx-auto'>
            Contact Us
        </button>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>


        <div style={{zIndex: "1", position: "relative"}} className='Navbar'>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              
              <div className="Navbar-logo">
                <NavLink className="navbar-brand" to="/">Sparue</NavLink>
              </div>

              <Button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                aria-expanded="false" 
                aria-label="Toggle navigation" 
                onClick={toggleDrawer(anchor, true)}
              >
                  <span className="py-1 fas fa-bars"></span>
              </Button>

              <div className="collapse navbar-collapse Navbar-links">

                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                      activeClassName="current"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      // exact
                      className="nav-link"
                      to="/Services"
                      activeClassName="current"
                    >
                      Services
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link"
                      to="/CaseStudy"
                      activeClassName="current"
                    >
                      Case Studies
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link"
                      to="/About"
                      activeClassName="current"
                    >
                      About us
                    </NavLink>
                  </li>
                </ul>

                <button onClick={scrollToSection}  className='button'>
                  Contact Us
                </button>

              </div>
            </div>
          </nav>
        </div>
    </div>
  );
}

