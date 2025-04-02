'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useLocale } from 'next-intl';
import { getMenuData } from '@/data/menu_data';

export default function NavMenu() {
  const locale = useLocale();
  const menu_data = getMenuData(locale);

  return (
    <ul>
      {menu_data.map((item, i) => (
        <li
          key={i}
          className={`${item.has_dropdown ? 'has-dropdown active menu-thumb' : ''}`}
        >
          <Link href={item.link}>
            {item.title}
            {(item.has_dropdown || item.img_dropdown) && (
              <i className="fas fa-angle-down"></i>
            )}
          </Link>

          {/* Image Dropdown */}
          {item.img_dropdown && item.sub_menus && (
            <ul className="submenu has-homemenu">
              <li>
                <div className="homemenu-items">
                  {item.sub_menus.map((sub_item, index) => (
                    <div key={index} className="homemenu">
                      <div className="homemenu-thumb">
                        {sub_item.demo_img && (
                          <Image
                            src={sub_item.demo_img}
                            alt={sub_item.title}
                            style={{ height: 'auto' }}
                          />
                        )}
                        <div className="demo-button">
                          <Link
                            href={sub_item.link}
                            className="theme-btn p5-bg"
                          >
                            <span>{sub_item.title}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">
                          Home Version 0{index + 1}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          )}

          {/* Normal Dropdown */}
          {item.has_dropdown && item.sub_menus && (
            <ul className="submenu">
              {item.sub_menus.map((sub_item, index) => (
                <li key={index}>
                  <Link href={sub_item.link}>{sub_item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
