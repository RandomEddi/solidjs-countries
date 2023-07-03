import { Link } from '@solidjs/router'
import { type Component } from 'solid-js'

export const Header: Component = () => {
  return (
    <div class='h-12 bg-gray-500 w-full flex justify-center gap-6 items-center border-b-[1px] rounded-2xl'>
      <Link class='bg-white py-1 px-3 rounded-md hover:bg-gray-300' href='/'>
        Все страны
      </Link>
      <Link class='bg-white py-1 px-3 rounded-md hover:bg-gray-300' href='/map'>
        Карта
      </Link>
    </div>
  )
}
