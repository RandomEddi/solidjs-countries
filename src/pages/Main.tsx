import { createSignal, onMount, Component, createEffect } from 'solid-js'
import type { CountryInterface } from '@/types'
import { Country, Search } from '@/components'

export const Main: Component = () => {
  const [countries, setCountries] = createSignal<CountryInterface[]>([])
  const [searchValue, setSearchValue] = createSignal('')

  onMount(async () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((resp) => resp.json())
      .then(setCountries)
  })

  return (
    <div class='bg-gray-500 min-h-[100vh]'>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div class='grid justify-center gap-4 py-4'>
        {countries()
          .filter((country) => country.name.common.toLowerCase().includes(searchValue().toLowerCase()))
          .map((country) => (
            <Country {...country} />
          ))}
      </div>
    </div>
  )
}
