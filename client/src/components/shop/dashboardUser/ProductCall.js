import React, { Fragment } from "react";
import { Products } from "..";
import Layout from "./Layout";

const UserProduct = (props) => {
  return (
    <Fragment>
      <Layout children={<Products />} />
    </Fragment>
  );
};

export default UserProduct;
