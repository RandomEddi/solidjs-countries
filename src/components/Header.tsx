import { Link } from '@solidjs/router'
import { type Component } from 'solid-js'

export const Header: Component = () => {
  return <div class='h-12 bg-white w-full flex justify-center gap-2'>
    <Link href='/map'>Карта</Link>
  </div>
}
