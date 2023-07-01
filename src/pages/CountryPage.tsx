import { type Component, createResource, Switch, Match } from 'solid-js'
import { Link, useParams } from '@solidjs/router'
import type { CountryInterface } from '@/types'
import { Loading } from '@/components'

const fetchCountry = async (cca: string): Promise<CountryInterface[]> =>
  (await fetch(`https://restcountries.com/v3.1/alpha/${cca}`)).json()

export const CountryPage: Component = () => {
  const { country } = useParams()

  const [searchedCountries] = createResource<CountryInterface[], string>(
    country,
    fetchCountry,
  )

  return (
    <Switch>
      <Match when={searchedCountries.error}>
        <div class='bg-gray-500 min-h-[100vh] flex justify-center items-center'>
          <p class='text-white mr-4 text-4xl'>Error</p>
          <Link
            href='/'
            class='text-4xl text-gray-500 bg-white py-3 px-6 rounded-lg hover:bg-gray-800 hover:text-white'
          >
            Back
          </Link>
        </div>
      </Match>
      <Match when={searchedCountries.loading}>
        <div class='bg-gray-500 min-h-[100vh] flex justify-center items-center'>
          <Loading size={40} borderSize={8} />
        </div>
      </Match>
      <Match when={searchedCountries()}>
        <div class='bg-gray-500 min-h-[100vh]'>
          {searchedCountries()![0].name.common}
        </div>
      </Match>
    </Switch>
  )
}
