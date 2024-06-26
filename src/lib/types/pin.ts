import { ETheme } from "./theme"

export enum EPinType {
  Coffee = 'coffee',
  Event = 'event',
  Home = 'home',
  Picture = 'picture',
  Missing = 'missing',
  Goal = 'goal'
}

export interface IPin {
  author: string | string[]
  username: string | string[]
  title?: string
  city: string
  country: string
  coordinates: [number, number]
  date: string
  photo: string
  type?: EPinType
  streetview?: string
  theme?: ETheme
}
