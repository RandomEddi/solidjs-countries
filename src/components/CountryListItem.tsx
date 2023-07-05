import { type Component } from 'solid-js'
import type { CountryInterface } from '@/types'
import { Link } from '@solidjs/router'

interface Props {
  country: CountryInterface
  translation: boolean
}

export const CountryListItem: Component<Props> = (props) => {
  return (
    <Link
      href={`/${props.country.cca2}`}
      class='flex gap-4 items-center hover:bg-gray-300 cursor-pointer pr-4'
    >
      <img
        loading='lazy'
        class='w-12 h-8'
        src={props.country.flags.svg || props.country.flags.png}
        alt={props.country.flags.alt}
      />
      <p>
        {props.country.name.common}{' '}
        {props.translation ? `"${props.country.translations.rus.common}"` : ''}
      </p>
    </Link>
  )
}
