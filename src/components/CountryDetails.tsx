import { createSignal, type Component, For } from 'solid-js'
import { CountryInterface } from '@/types'
import { Link } from '@solidjs/router'
import { CountryBorders } from './CountryBorders'

export const CountryDetails: Component<CountryInterface> = (props) => {
  const [isCapitalBlured, setIsCapitalBlured] = createSignal(true)

  return (
    <div class='bg-gray-500 min-h-[calc(100vh-3rem)]'>
      <div class='container mx-auto pt-10'>
        <div class='flex w-full mb-8'>
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
            {props.currencies && Object.entries(props.currencies)[0] && (
              <div class='mt-6 flex text-white font-bold text-3xl items-center'>
                <p class='mr-3'>ВАЛЮТА:</p>
                <p>
                  {Object.entries(props.currencies)[0][1].name}(
                  {Object.entries(props.currencies)[0][1].symbol})
                </p>
              </div>
            )}
            {props.capital[0] && (
              <div class='mt-6 flex text-white font-bold text-3xl items-center'>
                <p class='mr-3'>СТОЛИЦА:</p>
                <span
                  onClick={() => setIsCapitalBlured(false)}
                  classList={{
                    'blur-md': isCapitalBlured(),
                    'bg-white': isCapitalBlured(),
                    'cursor-pointer': isCapitalBlured(),
                  }}
                >
                  {props.capital[0]}
                </span>
              </div>
            )}
          </div>
        </div>
        {props.borders && <CountryBorders borders={props.borders} />}
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
