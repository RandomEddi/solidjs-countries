export interface Country {
  name: {
    common: string
  }
  flags: {
    png: string
    alt: string
  }
  borders: string[]
  timezone: [string]
  translations: {
    rus: {
      official: string
      common: string
    }
  }
}
