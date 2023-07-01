import { type Component } from 'solid-js'

interface LoadingProps {
  size?: number | string
  borderSize?: 0 | 2 | 4 | 8 | string
}

export const Loading: Component<LoadingProps> = ({
  size = 8,
  borderSize = 2,
}) => {
  return (
    <div
      class={`flex justify-center items-center ${`w-${size}`} ${`h-${size}`}`}
    >
      <div
        class={`animate-spin rounded-full ${`border-b-${borderSize}`} ${`border-t-${borderSize}`} border-white h-full w-full`}
      ></div>
    </div>
  )
}
