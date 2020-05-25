import React from "react";
import PageLayout from "../components/PageLayout";
import { Success } from "../components";

const SuccessPage = props => {
  return (
    <PageLayout>
      <Success {...props}></Success>
    </PageLayout>
  );
};

export default SuccessPage;
