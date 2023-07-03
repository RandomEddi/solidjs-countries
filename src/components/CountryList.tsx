import { For, type Component } from 'solid-js'
import type { CountryInterface } from '@/types'
import { CountryListItem } from './CountryListItem'

export const CountryList: Component<{
  countries: CountryInterface[]
}> = ({ countries }) => {
  return (
    <div class='grid justify-center gap-4 py-4'>
      <For each={countries}>
        {(country) => <CountryListItem {...country} />}
      </For>
    </div>
  )
}
