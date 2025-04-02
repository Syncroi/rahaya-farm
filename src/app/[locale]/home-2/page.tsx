import React from "react";
import { Metadata } from "next";
import HomeTwo from "@/components/homes/home-2";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Rahaya Farm Home Two - Agriculture Farming Next js Template",
  description:
    "Introducing Rahaya Farm - the ultimate Next template for showcasing your agricultural or organic business. Designed with a sleek and modern aesthetic, Rahaya Farm effortlessly captures the essence of sustainable farming and food production.",
};

export default function index() {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
}
