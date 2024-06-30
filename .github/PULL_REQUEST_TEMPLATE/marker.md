---
When adding a new marker, you must do 2 things:
- Add the image that will appear alongside the marker. The picture will be stored under `public/photos`, in a folder named after your GitHub username. As an example, you'll find my own one in `public/photos/JuditKaramazov`.
- Edit the `places.ts` file under the `data` folder with an entry containing the following information:

```ts
{
    author: '...', // First and last name. A list of people can be added as well, in case several peeps were involved (as an example, due to a trip or visit).
    username: '...', // Username (or list of usernames).
    type: ..., // Type of the marker. You'll find more information below.
    title?: '...', // An optional title for the picture, useful to indicate the name of special events (a concert, a certain Museum...).
    city: '...', // The city where the image was taken.
    country: '...', // The country where the image was taken.
    coordinates: [..., ...], // The coordinates of the marker (ideally, they should be as precise as possible).
    date: '...', // The date when the image was taken, YYYY-MM-DD.
    streetview?: '...', // An optional link to Google Map Street View.
    photo: '...' // The image itself, stored under 'public/photos/YourGitHubUsername'.
}
```

> **Note**:
> The information followed by '?' (like 'title?' or 'streetview?') is optional, which means that adding it (or not) is completely up to you. The rest of the fields are mandatory.

The available pin types are:
- Coffee
- Event
- Home
- Picture
- Missing
- Goal
  
> **Note**:
> The 'Missing' pin should be manually updated, in case you revisited a marker and realized it's now missing. As for the 'Goal' pin, there's a default folder (`/public/photos/default`) containing its unique image (`/public/photos/default/goal-photo.jpg`)!
---

> Although you'll find detailed information in the [HOWTO file](https://github.com/JuditKaramazov/blob/main/HOWTO.md), this is a mere orientation to make some guidelines immediately available for you.

## **People**: ...

<!-- List the people involved or present in this section; it can be a single individual (the one who took the picture, for instance) or a group. If they belong to an organization, you can write the name they're using for such purpose. -->

...

## **Location**:

<!-- Write the location (city, country) and the coordinates (following this format, as it happens with the city of Barcelona: [41.3874, 2.1686]). Additionally, add a Google Maps link -->

...

## **Date**:

<!-- Write the date using the following format (YYYY-MM-DD) -->

...

## **Image**: ...

<!-- Add your beautiful picture here! -->
