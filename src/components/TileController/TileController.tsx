import { TileLayer, LayersControl } from 'react-leaflet'
import type { ITyle } from './types'
import useTheme from 'src/hooks/useTheme'

const TileController = ({ id, url, name }: ITyle) => {
  const { theme, changeTheme } = useTheme()

  return (
    <LayersControl.BaseLayer checked={id === theme} name={name}>
      <TileLayer
        url={url}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        eventHandlers={{
          add: () => {
            changeTheme(id)
          }
        }}
      />
    </LayersControl.BaseLayer>
  )
}

export default TileController
