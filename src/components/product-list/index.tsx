import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import ProductListArea from "./ProductListArea";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";

export default function ProductList() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Product List" subtitle="Product List" />
      <ProductListArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  );
}
