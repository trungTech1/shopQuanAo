import { memo } from "react";
import React from "react";
import Header from "./theme/Header";
import Footer from "./theme/Footer";
import PropTypes from "prop-types";
const MasterLayout = ({ children, ...pops }) => {
  return (
    <div {...pops}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MasterLayout.propTypes = { children: PropTypes.node.isRequired };

export default memo(MasterLayout);
