import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../../widgets/Sidebar";
import { ContentWrapper } from "./ContentWrapper";

const Content = () => {
  return (
    <ContentWrapper>
      <Sidebar />
      {/* <Header /> */}
      <Outlet />
    </ContentWrapper>
  );
};

export default Content;
