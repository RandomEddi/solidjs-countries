import { createSignal, type Component, For } from 'solid-js'
import { CountryInterface } from '@/types'
import { Link } from '@solidjs/router'

export const CountryDetails: Component<CountryInterface> = (props) => {
  const [] = createSignal()

  return (
    <div class='bg-gray-500 min-h-[calc(100vh-3rem)]'>
      <div class='container mx-auto pt-10'>
        <div class='flex w-full'>
          <img
            class='w-[40%] mr-40'
            src={props.flags.svg || props.flags.png}
            alt={props.flags.alt}
          />
          <div class='mt-3'>
            <p class='text-white font-bold text-3xl'>{props.name.common}</p>
            <p class='text-white font-bold text-3xl mt-6'>
              {props.translations.rus.common}
            </p>
            {props.currencies && (
              <div class='mt-6 flex flex-col text-white font-bold text-3xl items-center'>
                <p>ВАЛЮТА</p>
                <div class='flex gap-5 mt-2'>
                  <For
                    each={Array.from(
                      new Set(
                        Object.entries(props.currencies).map(
                          (currency) => currency[1].symbol,
                        ),
                      ),
                    )}
                  >
                    {(currencySymbol) => <p>{currencySymbol}</p>}
                  </For>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Link
        class='fixed right-10 top-14 text-5xl inline text-gray-500 bg-black hover:bg-neutral-600 rounded-full pb-2.5 px-3'
        href='/'
      >
        &#8612;
      </Link>
    </div>
  )
}