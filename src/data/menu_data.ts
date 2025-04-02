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

export const getMenuData = (locale: string): DataType[] => [
  {
    id: 1,
    title: "Home",
    link: `/${locale}`,
    img_dropdown: false,
    sub_menus: [
      { link: `/${locale}`, title: "Home 01", demo_img: demo_img_1 },
      { link: `/${locale}/home-2`, title: "Home 02", demo_img: demo_img_2 },
      { link: `/${locale}/home-3`, title: "Home 03", demo_img: demo_img_3 },
    ],
  },
  {
    id: 2,
    title: "About Us",
    link: `/${locale}/about`,
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Service",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: `/${locale}/service`, title: "Services" },
      { link: `/${locale}/service-details`, title: "Services Details" },
    ],
  },
  {
    id: 4,
    title: "Projects",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: `/${locale}/gallery`, title: "Gallery" },
      { link: `/${locale}/gallery-details`, title: "Gallery Details" },
    ],
  },
  {
    id: 6,
    title: "Products",
    link: `/${locale}/product-list`,
    has_dropdown: false,
    sub_menus: [
      { link: `/${locale}/about`, title: "About" },
      { link: `/${locale}/product-list`, title: "Product" },
      { link: `/${locale}/product-details`, title: "Product Details" },
      { link: `/${locale}/faq`, title: "FAQ" },
      { link: `/${locale}/contact`, title: "Contact" },
    ],
  },
  {
    id: 5,
    title: "Special Packs",
    link: `/${locale}/blog`,
    has_dropdown: false,
    sub_menus: [
      { link: `/${locale}/blog`, title: "Blog" },
      { link: `/${locale}/blog-details`, title: "Blog Details" },
    ],
  },
  {
    id: 7,
    title: "Contact",
    link: `/${locale}/contact`,
    has_dropdown: false,
  },
];
