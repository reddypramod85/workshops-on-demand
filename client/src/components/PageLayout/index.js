import React from "react";
import PropTypes from "prop-types";
import { Grommet, Box } from "grommet";
import AppHeader from "../Header";
import AppFooter from "../Footer";
import Hpedev from "../Hpedev";
import { hpe } from "grommet-theme-hpe";

const PageLayout = ({ children }) => {
  return (
    <Grommet theme={hpe} themeMode="dark">
      <Box
        overflow="auto"
        align="center"
        flex
        fill
        direction="column"
        justify="between"
        height={{ min: "100vh", max: "auto" }}
        gap="small"
      >
        <AppHeader />
        {children}
        <Hpedev />
        <AppFooter />
      </Box>
    </Grommet>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageLayout;
