export enum ETheme {
  Earth = 'earth',
  Light = 'light',
  Dark = 'dark'
}

export type GlobalTheme = {
  theme: ETheme
  changeTheme: (theme: ETheme) => void
}
