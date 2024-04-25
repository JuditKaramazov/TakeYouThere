import { useMemo } from 'react'
import Image from 'next/image'
import AuthorIcon from '../AuthorIcon'
import { getRelativeTimeString, getNameString, getDistance } from 'src/lib/utils'
import styles from './style.module.css'

const Location = ({
  type,
  city,
  country,
  author,
  date,
  coordinates,
  map,
  setOpen,
  sortKey,
  theme
}) => {
  const name = useMemo(() => getNameString(author), [author])

  const onClick = () => {
    if (screen.width <= 438) {
      setOpen(false)
    }
    map.flyTo(coordinates, 10)
  }

  const getItalic = () => {
    if (sortKey === 'Date') {
      return getRelativeTimeString(date)
    }
    return Math.round(getDistance(coordinates)) + ' km away'
  }

  const getIcon = () => {
    if (sortKey === 'Distance') {
      return <i className="bi bi-signpost-fill"></i>
    }
    return <i className="bi bi-clock"></i>
  }

  return (
    <div className={`${styles.listings} ${theme === 'dark' ? styles.dark_theme : ''}`}>
      <div className={styles.marker} onClick={onClick}>
        <Image
          src={`/images/markers/${type}-image.png`}
          alt="Marker"
          title="Go to pin"
          width={70}
          height={70}
          objectFit="scale-down"
        />
      </div>
      <div className={styles.text}>
        <p className={styles.paragraph}>
          <span className={styles.title} onClick={onClick} title="Go to pin">
            {city}, {country}
          </span>
        </p>
        <p className={styles.paragraph1}>
          <span className={styles.light}>
            {getIcon()} {getItalic()}
          </span>
        </p>
        <p className={styles.paragraph2}>
          <span className={styles.authors}>
            <AuthorIcon author={author} /> {name}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Location
