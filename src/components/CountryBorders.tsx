import { createResource, type Component, For } from 'solid-js'
import { CountryListItem } from './CountryListItem'

interface Props {
  borders: string[]
}

async function fetchBorders(borders: string[]) {
  return await Promise.all(
    borders.map((border) =>
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((response) => response.json())
        .then((data) => data[0]),
    ),
  )
}

export const CountryBorders: Component<Props> = (props) => {
  const [searchedCountries] = createResource(props.borders, fetchBorders)

  return (
    <div class='grid justify-center'>
      <p class='mb-4 text-white font-bold text-3xl'>ГРАНИЦЫ СТРАНЫ</p>
      <div class='flex flex-col gap-3 mb-3'>
        <For each={searchedCountries()}>
          {(country) => (
            <CountryListItem country={country} translation={false} />
          )}
        </For>
      </div>
    </div>
  )
}
