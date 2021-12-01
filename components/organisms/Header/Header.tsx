import type { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Header: FC = () => {
  return (
    <Head>
        <title>BeAccountable App</title>
        <meta name="description" content="BeAccountable app is on a mission to keep people accountable for their fitness goals by tracking their progress pictures and sharing it friends/family etc" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Header
