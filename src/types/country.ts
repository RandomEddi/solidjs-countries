export interface CountryInterface {
  name: {
    common: string
  }
  flags: {
    png: string
    alt: string
  }
  cca2: string
  borders: string[]
  timezone: [string]
  translations: {
    rus: {
      official: string
      common: string
    }
  }
}
