import { sortByOldest } from 'src/lib/utils'
import { IPin } from 'src/lib/types'
import styles from './style.module.css'
import { Contributor, User } from './types'
import { getDistance } from 'src/lib/utils'

function getSet(arr: User[]) {
  return arr.filter(
    (v, i, a) =>
      a.findIndex((v2) => ['username'].every((k) => v2[k] === v[k])) === i
  )
}

function sortByDistance(a: User, b: User) {
  const d1 = getDistance(a.coordinates)
  const d2 = getDistance(b.coordinates)
  return d2 - d1
}

export function makeContributions(places: IPin[], type: string) {
  const users = []
  const contributions = []
  const places_copy = places.slice()
  const sortedPlaces = places_copy.sort(sortByOldest)

  for (var i = 0; i < sortedPlaces.length; i++) {
    if (Array.isArray(sortedPlaces[i].username)) {
      for (var j = 0; j < sortedPlaces[i].username.length; j++) {
        users.push({
          author: sortedPlaces[i].author[j],
          username: sortedPlaces[i].username[j],
          coordinates: sortedPlaces[i].coordinates
        })
      }
    } else {
      users.push({
        author: sortedPlaces[i].author,
        username: sortedPlaces[i].username,
        coordinates: sortedPlaces[i].coordinates
      })
    }
  }

  const userSet = getSet(users)

  for (var i = 0; i < userSet.length; i++) {
    var acc = 0

    switch (type) {
      case 'Pins': {
        for (var j = 0; j < users.length; j++) {
          if (userSet[i].username === users[j].username) {
            acc++
          }
        }
        break
      }
      case 'Distance': {
        for (var j = 0; j < users.length; j++) {
          if (userSet[i].username === users[j].username) {
            acc += getDistance(users[j].coordinates)
          }
        }
        break
      }
    }

    contributions.push({
      author: userSet[i].author,
      username: userSet[i].username,
      value: acc
    })
  }

  return contributions
}

export function getOrdinals(num: number) {
  switch (num) {
    case 0:
      return 'st';
    case 1:
      return 'nd';
    case 2:
      return 'rd';
    default:
      return 'th';
  }
}

export function getBarStyle(num: number) {
  switch (num) {
    case 0:
      return styles.bar_first;
    case 1:
      return styles.bar_second;
    case 2:
      return styles.bar_third;
    default:
      return styles.bar;
  }
}

export function getWidth(index: number, contributions: Contributor[]) {
  const maxValue = contributions[0].value
  const value = contributions[index].value

  return (value * 100) / maxValue + '%'
}

export function getUsername(index: number, contributions: Contributor[]) {
  const author = contributions[index].author

  var acc = 0
  for (var i = 0; i < contributions.length; i++) {
    if (contributions[i].author === author) {
      acc++
    }
  }

  if (acc > 1) {
    return '@' + contributions[index].username
  }
  return ''
}
