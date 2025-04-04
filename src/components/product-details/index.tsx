

import HeaderTwo from '@/layouts/headers/HeaderTwo'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ProductDetailsArea from './ProductDetailsArea'

export default function ProductDetails() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Product Details" subtitle="Product Details" />
      <ProductDetailsArea />       
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  )
}
