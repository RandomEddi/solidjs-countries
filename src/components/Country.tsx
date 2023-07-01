import { type Component } from 'solid-js'
import type { CountryInterface } from '@/types'
import { Link } from '@solidjs/router'

export const Country: Component<CountryInterface> = (props) => {
  return (
    <Link
      href={`/${props.cca2}`}
      class='flex gap-4 items-center hover:bg-gray-300 cursor-pointer pr-4'
    >
      <img
        loading='lazy'
        class='w-12 h-8'
        src={props.flags.png}
        alt={props.flags.alt}
      />
      <p>
        {props.name.common} "{props.translations.rus.common}"
      </p>
    </Link>
  )
}
