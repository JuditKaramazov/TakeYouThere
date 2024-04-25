import { Icon } from 'leaflet'
import { EPinType } from 'src/lib/types'

export const getIcon = (type: EPinType): Icon =>
  new Icon({
    iconUrl: `/images/markers/${type}.png`,
    iconSize: [45, 90]
  })

export const getFullDateString = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
