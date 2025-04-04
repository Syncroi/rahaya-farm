import { StaticImageData } from "next/image";
import demo_img_1 from "@/assets/img/header/home-1.jpg";
import demo_img_2 from "@/assets/img/header/home-2.jpg";
import demo_img_3 from "@/assets/img/header/home-3.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    demo_img?: StaticImageData;
  }[];
}

// t: from useTranslations()
// locale: current language
export const getMenuData = (locale: string, t: (key: string) => string): DataType[] => [
  {
    id: 1,
    title: t("menu.home"),
    link: `/${locale}`,
    img_dropdown: false,
    sub_menus: [
      { link: `/${locale}`, title: t("menu.home01"), demo_img: demo_img_1 },
      { link: `/${locale}/home-2`, title: t("menu.home02"), demo_img: demo_img_2 },
      { link: `/${locale}/home-3`, title: t("menu.home03"), demo_img: demo_img_3 },
    ],
  },
  {
    id: 2,
    title: t("menu.about"),
    link: `/${locale}/about`,
    has_dropdown: false,
  },
  {
    id: 3,
    title: t("menu.services"),
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: `/${locale}/service`, title: t("menu.servicesList") },
      { link: `/${locale}/service-details`, title: t("menu.servicesDetails") },
    ],
  },
  {
    id: 4,
    title: t("menu.projects"),
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: `/${locale}/gallery`, title: t("menu.gallery") },
      { link: `/${locale}/gallery-details`, title: t("menu.galleryDetails") },
    ],
  },
  {
    id: 6,
    title: t("menu.products"),
    link: `/${locale}/product-list`,
    has_dropdown: false,
    sub_menus: [
      { link: `/${locale}/about`, title: t("menu.about") },
      { link: `/${locale}/product-list`, title: t("menu.product") },
      { link: `/${locale}/product-details`, title: t("menu.productDetails") },
      { link: `/${locale}/faq`, title: t("menu.faq") },
      { link: `/${locale}/contact`, title: t("menu.contact") },
    ],
  },
  {
    id: 5,
    title: t("menu.specialPacks"),
    link: `/${locale}/blog`,
    has_dropdown: false,
    sub_menus: [
      { link: `/${locale}/blog`, title: t("menu.blog") },
      { link: `/${locale}/blog-details`, title: t("menu.blogDetails") },
    ],
  },
  {
    id: 7,
    title: t("menu.contact"),
    link: `/${locale}/contact`,
    has_dropdown: false,
  },
];
