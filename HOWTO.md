# 📬 Submission Guide

> Traveled recently? Have pictures to share? You're in the right place! You can always fork this repository - and then show me your awesome tweaks, adventures, and creations! 'Sharing is caring', after all.

## 🖇️ Fork this repository

**1.** Go to [TakeYouThere](https://github.com/JuditKaramazov/TakeYouThere)

**2.** In the top right corner, click on **Fork**. You can also [click here directly!](https://github.com/JuditKaramazov/TakeYouThere/fork).

## 🔗 Clone the forked repository to your machine

**1.** Go to your fork and click on **Code**.

> [!NOTE] 
> The link to your forked repository should look like this: `https://github.com/<your-username>/TakeYouThere`

**2.** Copy the given HTTPS link.

**3.** On your terminal, run the following command:

```
git clone <https-link>
```

> [!NOTE] 
> If you'd rather clone with SSH, copy the SSH key and run `git clone <ssh-key>`.

**Woah! Now you have a copy of the repository you can work with! 🎉**

## ⛓️ Create a branch

**1.** Move to your cloned repository directory with `cd TakeYouThere`.

**2.** Create a new branch with the following command:

```
git checkout -b <branch>
```

where `<branch>` is, of course, the name of your branch (creative, isn't it?).

> [!NOTE]
> The name of your branch could follow certain guidelines. As an example: `<first-letter-of-your-first-name><first-letter-of-your-last-name> + '/' + <branch-name>`.
> In my case, and just for clarity purposes: `jl/readme`.

## 🗃️ Add your pins

**1.** Go to the `public/photos` directory.

**2.** Create a folder and name it under your GitHub username. You'll save your pictures here!

**3.** Move to the `data` directory, and then open the `places.ts`.

**4.** Add a new object to the array containing:

- `author` - your first and last name(s).
- `username` - your GitHub username.
- `type` - pin type (**`EPinType.<pin-type>`**).
- `title?`- (optional) title of the picture, if any.
- `city` & `country` - city and country, indicating where the image was taken.
- `coordinates` - you can use [this website](https://www.gps-coordinates.net/my-location).
- `date` - year-month-day format, indicating when the picture was taken.
- `streetview?` - (optional) link to Google Map Street View. 
- `photo` - path to your image file (`public/photos/YourGitHubName/beautiful-place.jpg`)

**Understanding Pin Types:**

- `EPinType.Coffee` - You found an amazing café and you'd want to let everyone know about it.
- `EPinType.Event` - Did you go to a concert? Visited a museum recently? Share it!
- `EPinType.Home` - Places where you've been living - or your one and only home!
- `EPinType.Picture` - Places you traveled to.
- `EPinType.Missing` - After revisiting a pin, you realized that the sticker is now missing...

**Check out this example:**

```typescript
{
  author: 'Judit Lázaro',
  username: 'JuditKaramazov',
  type: EPinType.Coffee,
  title: 'Cafe Sissi',
  city: 'Engelhartszell an der Donau',
  country: 'Austria',
  coordinates: [48.500309, 13.7327201],
  date: '2021-02-09',
  photo: '/photos/JuditKaramazov/cafe-sissi-engel.jpg'
}
```

**Multiple authors? Then:**

```typescript
{
  author: ['Auregan Nedelec', 'Judit Lázaro'],
  username: ['AuNedelec', 'JuditKaramazov'],
  type: EPinType.Picture,
  city: 'Paris',
  country: 'France',
  coordinates: [48.8566, 2.3522],
  date: '2024-05-01',
  photo: '/photos/AuNedelec,JuditKaramazov/paris.jpg'
}
```

> [!NOTE]
> Remember that you can get a local preview of your changes by running the project on your machine! In order to do so, follow the [Contributing Guidelines](CONTRIBUTING.md).

## 🛫 Stage, commit, and push your changes

**1.** Stage your changes:

```
git add .
```

**2.** Commit your changes:

```
git commit -m "<commit-description>"
```

**3.** Push your changes to your forked repository:

```
git push
```

## 🚀 Create a pull request

**1.** Go to your fork.

**2.** Select the branch you created.

**3.** Click on **Pull request**.

**4.** Add a (convenient and appropriate) **title** and **description** to your pull request.

> [!NOTE]
> Don't forget to assign a contributor for review. I'll gladly give you a hand if needed!

## 🎉 You're done!

If everything goes as expected, your submission will be reviewed and approved as soon as possible. Let's go!
