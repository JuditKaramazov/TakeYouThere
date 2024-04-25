import type { IPin } from 'src/lib/types'

export interface Props {
  pins: IPin[]
  setMapRef: Function
}

export interface IFilter {
  name: string
  type: string
  checked: boolean
}
