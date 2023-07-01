import { type Component } from 'solid-js'
import type { CountryInterface } from '@/types'

export const Country: Component<CountryInterface> = (props) => {
  return (
    <div class='flex gap-3 items-center hover:bg-white cursor-pointer'>
      <img class='w-12' src={props.flags.png} alt={props.flags.alt} />
      <p>{props.name.common}</p>
    </div>
  )
}
