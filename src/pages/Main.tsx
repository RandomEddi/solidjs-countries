import { createSignal, onMount, Component } from 'solid-js'
import type { CountryInterface } from '@/types'
import { Country } from '@/components'

export const Main: Component = () => {
  const [countries, setCountries] = createSignal<CountryInterface[]>([])

  onMount(async () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((resp) => resp.json())
      .then(setCountries)
  })

  return (
    <div class='grid justify-center gap-4 py-4 bg-gray-500'>
      {countries().map((country) => (
        <Country {...country} />
      ))}
    </div>
  )
}
