import { useState, useMemo } from 'react'
import { Contributor, ELeaderKeys } from './types'
import { PLACES } from 'src/data/places'
import {
  makeContributions,
  getOrdinals,
  getUsername,
  getBarStyle,
  getWidth
} from './utils'
import { ETheme } from 'src/lib/types'
import styles from './style.module.css'

interface ContributionsProps {
  theme: ETheme
}

export default function Contributions({ theme }: ContributionsProps) {
  const [leaderKey, setLeaderKey] = useState<ELeaderKeys>(ELeaderKeys.Pins)

  function sortContributions(leaderKey) {
    return makeContributions(PLACES, leaderKey).sort((a, b) => {
      return b.value - a.value
    })
  }

  const sortedContributions = useMemo(
    () => sortContributions(leaderKey),
    [leaderKey]
  )

  const getIcon = () => {
    if (leaderKey === ELeaderKeys.Pins) {
      return <i className="bi bi-pin-fill"></i>
    }
    return <i className="bi bi-signpost-fill"></i>
  }

  const getValue = (contributor: Contributor) => {
    if (leaderKey === ELeaderKeys.Distance) {
      return Math.round(contributor.value) + ' km'
    }
    return contributor.value
  }

  return (
    <div className={styles.contributions}>
      <div className={styles.sort}>
        <div className={`${styles.sort_back} ${theme === 'dark' ? styles.dark_theme : ''}`}>
          <label>
            <b>Leading by: </b>
          </label>
          <select
            onChange={(e) => setLeaderKey(e.target.value as ELeaderKeys)}
            className={styles.sort_button}
          >
            <option>Pins</option>
            <option>Distance</option>
          </select>
        </div>
      </div>
      {sortedContributions.map((contributor: Contributor, index) => (
        <div className={styles.line} key={index}>
          <div className={styles.info}>
            <div className={styles.position}>
              {' '}
              {index + 1}
              {getOrdinals(index)}{' '}
            </div>
            <a
              className={styles.name}
              href={'https://github.com/' + contributor.username}
              title={'Go to ' + contributor.author + "'s GitHub"}
            >
              {' '}
              {contributor.author}{' '}
              <div className={styles.username}>
                {' '}
                {getUsername(index, sortedContributions)}{' '}
              </div>
            </a>
            <div className={styles.number}>
              {' '}
              {getValue(contributor)} {getIcon()}
            </div>
          </div>
          <div className={styles.progress}>
            <div
              className={getBarStyle(index)}
              style={{ width: getWidth(index, sortedContributions) }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}
