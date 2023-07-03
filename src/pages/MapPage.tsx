import { createEffect, type Component } from 'solid-js'
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world.js'
import { useNavigate } from '@solidjs/router'

export const MapPage: Component = () => {
  const navigate = useNavigate()
  let tooltipElement: undefined | Element

  const onRegionClick = (_: any, code: string) => {
    navigate('/' + code)
    tooltipElement?.remove()
  }

  createEffect(() => {
    new jsVectorMap({
      selector: '#map',
      map: 'world',
      showTooltip: true,
      zoomButtons: false,
      onRegionTooltipShow(_: any, tooltip: any) {
        tooltipElement = tooltip.getElement() as Element
        //@ts-ignore
        tooltipElement.style.position = 'absolute'

        tooltipElement.classList.add(
          'bg-gray-500',
          'px-3',
          'py-1',
          'rounded-md',
          'text-white',
          'hidden'
        )
      },
      onRegionClick,
    })
  }, [])

  return <div class='relative h-[calc(100vh-3rem)]' id='map' />
}
