import {
  MapContainer,
  LayersControl,
  LayerGroup,
  ZoomControl,
  useMap
} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import Marker from 'src/components/Marker'
import TileController from 'src/components/TileController/TileController'
import { DEFAULT_TILES, DEFAULT_FILTERS } from './config'
import { createClusterCustomIcon } from './utils'
import type { IFilter, Props } from './types'
import type { IPin } from 'src/lib/types'

function filterPins(pins: IPin[], { name, type, checked }: IFilter) {
  return (
    <LayersControl.Overlay checked={checked} name={name}>
      <LayerGroup>
        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          showCoverageOnHover={false}
        >
          {pins
            .filter((pin: IPin) => pin.type === type)
            .map((pin: IPin) => (
              <Marker key={`${pin.coordinates}-${pin.author}`} {...pin} />
            ))}
        </MarkerClusterGroup>
      </LayerGroup>
    </LayersControl.Overlay>
  )
}

export default function Map({ pins, setMapRef }: Props) {
  const Ref = () => {
    setMapRef(useMap())
    return null
  }

  return (
    <MapContainer
      center={[41.56157392223945, -8.397397824887639]}
      zoom={3.4}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
      zoomControl={false}
      attributionControl={true}
      maxZoom={18}
    >
      <Ref></Ref>
      <LayersControl position="topright">
        {DEFAULT_TILES.map((tile) => (
          <TileController key={tile.name} {...tile} />
        ))}
        {DEFAULT_FILTERS.map((filter: IFilter) => filterPins(pins, filter))}
      </LayersControl>
      <ZoomControl position="topright" />
    </MapContainer>
  )
}
