export interface CountryInterface {
  name: {
    common: string
  }
  flags: {
    png: string
    svg?: string
    alt: string
  }
  cca2: string
  borders: string[]
  timezone: string[]
  capital: string[]
  currencies?: Record<
    string,
    {
      name: string
      symbol: string
    }
  >
  translations: {
    rus: {
      official: string
      common: string
    }
  }
}
