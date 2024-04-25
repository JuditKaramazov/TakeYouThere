import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useTheme, { ThemeProvider } from 'src/hooks/useTheme'
import Contributions from 'src/components/Contributions'
import Location from 'src/components/Location'
import type { IPin } from 'src/lib/types'
import { Props, ESortKeys, ESortDirection } from './types'
import { sortingFunctions, changeVariables } from './utils'
import { CSSTransition } from 'react-transition-group'
import styles from './style.module.css'

export default function Sidebar({ pins, isOpen, setOpen, mapRef }: Props) {
  const [locations, setLocations] = useState<boolean>(true)
  const [contributions, setContributions] = useState<boolean>(false)
  const [sortKey, setSortKey] = useState<ESortKeys>(ESortKeys.Date)
  const [sortDirection, setSortDirection] = useState<ESortDirection>(
    ESortDirection.Ascending
  )
  const { theme } = useTheme()

  const sortedPins = useMemo(
    () => pins.sort(sortingFunctions(sortKey, sortDirection)),
    [pins, sortKey, sortDirection]
  )

  const getButtonStyle = (button: string) => {
    if (button === 'locations') {
      if (locations) {
        return styles.button_active
      }
      return styles.button
    }
    if (button === 'contributions') {
      if (contributions) {
        return styles.button_active
      }
      return styles.button
    }
  }

  return (
    <ThemeProvider>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames={{
          enter: styles.slide_enter,
          enterActive: styles.slide_enter_active,
          exit: styles.slide_exit,
          exitActive: styles.slide_exit_active,
        }}
        unmountOnExit
      >
        <div className={`${styles.sidebar} ${theme === 'dark' ? styles.dark_theme : ''}`}>
          <div className={styles.content}>
            <div className={`${styles.heading} ${theme === 'dark' ? styles.dark_theme : ''}`}>
              <Link href="https://karamazfolio.xyz/">
                <Image
                  src="/images/takeyouthere-logo.png"
                  alt="'Take you there' original logo."
                  width={120}
                  height={120}
                  style={{ cursor: 'pointer' }}
                  priority
                />
              </Link>
              <br />
              <div className={`${styles.buttons} ${theme === 'dark' ? styles.dark_theme : ''}`}>
                <div className={`${styles.tab} ${theme === 'dark' ? styles.dark_theme : ''}`}>
                  <button
                    className={getButtonStyle('locations')}
                    type={'button'}
                    onClick={() =>
                      changeVariables(true, setLocations, setContributions)
                    }
                  >
                    {' '}
                    Locations <i className="bi bi-geo-fill"></i>{' '}
                  </button>
                  &nbsp;
                  <button
                    className={getButtonStyle('contributions')}
                    type={'button'}
                    onClick={() =>
                      changeVariables(false, setLocations, setContributions)
                    }
                  >
                    {' '}
                    Contributions <i className="bi bi-camera-fill"></i>{' '}
                  </button>
                  <br />
                </div>
              </div>
            </div>
            <CSSTransition
              in={locations}
              timeout={250}
              classNames={{
                enter: styles.locations_enter,
                enterActive: styles.locations_enter_active,
                exit: styles.locations_exit,
                exitActive: styles.locations_exit_active,
              }}
              unmountOnExit
            >
              <div>
                <div className={`${styles.sort} ${theme === 'dark' ? styles.dark_theme : ''}`}>
                  <div className={`${styles.sort_back} ${theme === 'dark' ? styles.dark_theme : ''}`}>
                    <label>
                      <b>Sort by: </b>
                    </label>
                    <select
                      onChange={(e) => setSortKey(e.target.value as ESortKeys)}
                      className={styles.sort_button}
                    >
                      {Object.keys(ESortKeys).map((key) => (
                        <option key={key} value={key}>
                          {key}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={(e) =>
                        setSortDirection(e.target.value as ESortDirection)
                      }
                      className={styles.sort_button}
                      value={sortDirection}
                    >
                      <option>↓</option>
                      <option>↑</option>
                    </select>
                  </div>
                </div>
                {sortedPins.map((pin: IPin) => (
                  <Location
                    key={`${pin.coordinates[0]}#${pin.coordinates[1]}`}
                    type={pin.type}
                    city={pin.city}
                    country={pin.country}
                    author={pin.author}
                    date={pin.date}
                    coordinates={pin.coordinates}
                    map={mapRef}
                    setOpen={setOpen}
                    sortKey={sortKey}
                    theme={theme}
                  />
                ))}
              </div>
            </CSSTransition>
            <CSSTransition
              in={contributions}
              timeout={250}
              classNames={{
                enter: styles.contributions_enter,
                enterActive: styles.contributions_enter_active,
                exit: styles.contributions_exit,
                exitActive: styles.contributions_exit_active,
              }}
              unmountOnExit
            >
              <Contributions theme={theme}></Contributions>
            </CSSTransition>
          </div>
        </div>
      </CSSTransition>
    </ThemeProvider>
  )
}
