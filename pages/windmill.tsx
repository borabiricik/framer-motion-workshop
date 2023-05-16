import React from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../src/layout/Layout";
import Windmill from "../src/components/Windmill";

const WindMillPage: NextPageWithLayout = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <Windmill />
    </div>
  );
};

WindMillPage.getLayout = (page) => <Layout>{page}</Layout>;

export default WindMillPage;
