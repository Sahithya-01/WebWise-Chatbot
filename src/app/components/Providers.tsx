'use client'

import { NextUIProvider } from '@nextui-org/react'

import { PropsWithChildren } from 'react'

// It accepts children as a prop of type PropsWithChildren.
const Providers = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

export default Providers
