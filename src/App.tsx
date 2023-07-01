import { Component } from 'solid-js'
import { Routes, Route } from '@solidjs/router'
import { MantineProvider } from '@mantine/core'
import { Main } from 'pages'

const App: Component = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path={'/'} component={Main} />
      </Routes>
    </MantineProvider>
  )
}

export default App
