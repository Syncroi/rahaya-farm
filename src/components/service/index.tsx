

import React from 'react'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Breadcrumnd from '../common/Breadcrumnd'
import ServiceArea from './ServiceArea'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'

export default function Service() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Services" subtitle="Services" />
      <ServiceArea />
      <SubscribeHomeThree />
      <FooterTwo />

    </>
  )
}
