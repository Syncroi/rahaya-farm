import Service from "@/components/service";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rahaya Farm Service - Agriculture Farming Next js Template",
  description:
    "Introducing Rahaya Farm - the ultimate Next template for showcasing your agricultural or organic business. Designed with a sleek and modern aesthetic, Rahaya Farm effortlessly captures the essence of sustainable farming and food production.",
};

export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
}
