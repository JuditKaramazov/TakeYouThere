import { useMemo } from 'react'
import { Marker as MarkerContainer, Popup } from 'react-leaflet'
import Image from 'next/image'
import AuthorIcon from '../AuthorIcon'
import { IPin } from 'src/lib/types'
import { getIcon, getFullDateString } from './utils'
import { getRelativeTimeString, getNameString, getDistance } from 'src/lib/utils'
import styles from './style.module.css'

const Marker = ({
  type,
  coordinates,
  city,
  country,
  author,
  title,
  photo,
  date
}: IPin) => {
  const icon = getIcon(type)
  const name = useMemo(() => getNameString(author), [author])

  return (
    <MarkerContainer
      icon={icon}
      position={coordinates}
      title={`${name} at ${city}`}
    >
      <Popup>
        <div>
          <div className={styles.background}>
            <div className={styles.text}>
              <h1 className={styles.title}>
                {city}, {country}
              </h1>
              {title ? (
                <span className={styles.light}>
                  <i className="bi bi-pen"></i> {title} <br />
                </span>
              ) : null}
              <span className={styles.light}>
                <i className="bi bi-calendar"></i> {getFullDateString(date)} (
                {getRelativeTimeString(date)})
              </span>
              <br />
              <span className={styles.light}>
                <i className="bi bi-signpost-fill"></i>{' '}
                {Math.round(getDistance(coordinates))} km away
              </span>
              <br />
              <span>
                <AuthorIcon author={author} /> {name}
              </span>
            </div>
          </div>
          <Image
            alt={`${name} at ${city}`}
            src={photo}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
      </Popup>
    </MarkerContainer>
  )
}

export default Marker
