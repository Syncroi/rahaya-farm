"use client";
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./menu/NavMenu";
import Offcanvas from "@/components/common/Offcanvas";
import SearchBar from "@/components/common/SearchBar";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';

export default function HeaderTwo() {
  const { sticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [serchOpen, setSearchOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      <div className="header-top-section style-v01 d-lg-block d-none">
        <div className="container">
          <div className="header-top-wrapper">
            <a href="" className="location-area flex gap-2">
              <i className="fa-solid fa-location-dot"></i>
              <span>{t('cairo')} Alexandria desert road km 80, Cairo, Egypt</span>
            </a>
            <ul className="contact-list">
              <li>
                <a href=" tel:+20 1114288800" className="link" target="_blank">
                  <i className="fa-solid fa-phone"></i>
                  +20 1114288800
                </a>
              </li>
              <li>
                <a href="mailto:MohamedKh@Syncroi.com" className="link">
                  <i className="fa-solid fa-envelope"></i>
                  MohamedKh@Syncroi.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header
        id="header-sticky"
        className={`header-2 ${sticky ? "sticky" : ""}`}
      >
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <Image
                      src="/assets/rahayalogo.jpg"
                      width={100}
                      height={100}
                      alt="logo-img"
                    />{" "}
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper d-none d-xl-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <LanguageSwitcher />

                <div className="search-adjust">
                  <a
                    href="#"
                    className="search-trigger d-center"
                    onClick={() => setSearchOpen(!serchOpen)}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                  <div className="header-button d-sm-block d-none">
                    <Link href="/contact" className="cmn-btn round100">
                      Book An Appointment
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setOpen(!open)}
                  >
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas open={open} setOpen={setOpen} />
      <SearchBar serchOpen={serchOpen} setSearchOpen={setSearchOpen} />
    </>
  );
}
