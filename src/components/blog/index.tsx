
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import BlogArea from './BlogArea'

export default function Blog() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Special Packs" subtitle="Special Packs" />
      <BlogArea />
      <SubscribeHomeThree />
      <FooterTwo />

    </>
  )
}
