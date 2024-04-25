import { DateTime } from 'luxon'
import { IPin } from 'src/lib/types'

// getDistance() - Used on Location and Sidebar components.

function distance(lat1, lat2, lon1, lon2) {
  lon1 = (lon1 * Math.PI) / 180
  lon2 = (lon2 * Math.PI) / 180
  lat1 = (lat1 * Math.PI) / 180
  lat2 = (lat2 * Math.PI) / 180

  let dlon = lon2 - lon1
  let dlat = lat2 - lat1
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2)

  let c = 2 * Math.asin(Math.sqrt(a))

  let r = 6371

  return c * r
}

export function getDistance(coordinates: IPin['coordinates']) {
  const x0 = 41.598167419433594
  const y0 = 2.283038854598999
  const x1 = coordinates[0]
  const y1 = coordinates[1]

  return distance(x0, x1, y0, y1)
}

// getNameString() - Used on Location and Marker components.

export const getNameString = (authors: string[] | string) => {
  if (!Array.isArray(authors)) {
    return authors
  }

  const size = authors.length

  if (size <= 1) {
    return authors.join()
  }

  if (size <= 3) {
    return authors.slice(0, size - 1).join(', ') + ' and ' + authors[size - 1]
  }

  return authors.slice(0, 2).join(', ') + ' and ' + (size - 2) + ' others'
}

// getRelativeTimeString() - Used on Location and Marker components.

export const getRelativeTimeString = (date: string) => {
  return DateTime.fromISO(date)
    .toRelative(Date.now())
    .toLocaleString(DateTime.DATETIME_MED)
}

// sortByOldest() - Used on Sidebar and Contributions components.

export const sortByOldest = (a: IPin, b: IPin) => {
  return (
    DateTime.fromISO(a.date).toMillis() - DateTime.fromISO(b.date).toMillis()
  )
}
