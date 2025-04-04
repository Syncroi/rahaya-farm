
import React from 'react'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import BlogDetailsArea from './BlogDetailsArea'

export default function BlogDetails() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  )
}
