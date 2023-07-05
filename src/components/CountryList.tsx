import { For, type Component } from 'solid-js'
import type { CountryInterface } from '@/types'
import { CountryListItem } from './CountryListItem'

export const CountryList: Component<{
  countries: CountryInterface[]
}> = (props) => {
  return (
    <div class='grid justify-center gap-4 py-4'>
      <For each={props.countries}>
        {(country) => <CountryListItem translation country={country} />}
      </For>
    </div>
  )
}
