import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import ContactHomeTwo from "../homes/home-2/ContactHomeTwo";
import GoogleMap from "./GoogleMap";
import ContactInfo from "./ContactInfo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";

export default function Contact() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Contact" subtitle="Contact" />
      <ContactHomeTwo />
      <GoogleMap />
      <ContactInfo />
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  );
}
