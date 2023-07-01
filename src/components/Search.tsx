import { type Accessor, type Setter, type Component } from 'solid-js'

interface Props {
  searchValue: Accessor<string>
  setSearchValue: Setter<string>
}

export const Search: Component<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <div class='flex justify-center pt-4'>
      <input
        type='text'
        value={searchValue()}
        onInput={(event) => setSearchValue(event.target.value)}
      />
    </div>
  )
}
