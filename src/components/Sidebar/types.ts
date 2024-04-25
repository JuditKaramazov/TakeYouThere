import type { IPin } from 'src/lib/types'

export interface Props {
  pins: IPin[]
  isOpen: boolean
  setOpen: Function
  mapRef: undefined
}

export enum ESortKeys {
  Date = 'Date',
  Distance = 'Distance'
}

export enum ESortDirection {
  Ascending = '↓',
  Descending = '↑'
}
