import { createSignal, onMount, Component } from 'solid-js'
import { Country } from 'types'

export const Main: Component = () => {
  const [countries, setCountries] = createSignal<Country[]>([])

  onMount(async () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((resp) => resp.json())
      .then(setCountries)
  })

  return <div></div>
}
