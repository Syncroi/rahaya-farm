

import HeaderTwo from '@/layouts/headers/HeaderTwo'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import GalleryDetailsArea from './GalleryDetailsArea'

export default function GalleryDetails() {
  return (
    <>
    <HeaderTwo />
    <Breadcrumnd title="Gallery Details" subtitle="Gallery Details" />
    <GalleryDetailsArea />
    <SubscribeHomeThree />
    <FooterTwo />

    </>
  )
}
