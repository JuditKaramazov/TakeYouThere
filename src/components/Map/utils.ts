import L from 'leaflet'

export const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${'+' + cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(30, 30, true)
  })
}
