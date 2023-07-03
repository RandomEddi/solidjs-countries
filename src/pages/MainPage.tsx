import {
  createSignal,
  Component,
  For,
  createResource,
  Switch,
  Match,
} from 'solid-js'
import type { CountryInterface } from '@/types'
import { CountryListItem, Search, Loading, CountryList } from '@/components'

const fetchAllCountries = async () =>
  (await fetch('https://restcountries.com/v3.1/all')).json()

export const MainPage: Component = () => {
  const [searchValue, setSearchValue] = createSignal('')
  const [countries] = createResource<CountryInterface[]>(fetchAllCountries)

  return (
    <>
      <Switch>
        <Match when={countries.loading}>
          <div class='bg-gray-500 min-h-[calc(100vh-3rem)] flex justify-center items-center'>
            <Loading size={40} borderSize={8} />
          </div>
        </Match>
        <Match when={!countries.loading}>
          <div class='bg-gray-500 min-h-[calc(100vh-3rem)]'>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            {countries() && (
              <CountryList
                countries={countries()!.filter(
                  (country) =>
                    country.name.common
                      .toLowerCase()
                      .includes(searchValue().toLowerCase()) ||
                    country.translations.rus.common
                      .toLowerCase()
                      .includes(searchValue().toLowerCase()),
                )}
              />
            )}
          </div>
        </Match>
      </Switch>
    </>
  )
}
