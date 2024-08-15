import { useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { PLACES } from 'src/data/places'
import Sidebar from 'src/components/Sidebar'
import Menu from 'src/components/Menu'

const Map = dynamic(() => import('src/components/Map'), { ssr: false })

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [mapRef, setMapRef] = useState(null)

  return (
    <div>
      <Head>
        <title>Take you there</title>
        <meta
          name="description"
          content="Places that existed in our 'here and now'."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#4ab8a9"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#4ab8a9" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="google-site-verification" content="QabE4pgOKR5rQ45trqzVGARIOV6c3OB0FW_ZBUJtQqQ" />
      </Head>
      <Menu isOpen={isOpen} setOpen={setOpen} />
      <Sidebar
        mapRef={mapRef}
        isOpen={isOpen}
        setOpen={setOpen}
        pins={PLACES}
      />
      <div className="map">
        <Map setMapRef={setMapRef} pins={PLACES} />
      </div>
    </div>
  )
}
