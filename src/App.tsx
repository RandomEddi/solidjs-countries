import { Component } from 'solid-js'
import { Routes, Route, Router } from '@solidjs/router'
import { MainPage, CountryPage, MapPage } from '@/pages'
import { Header } from './components'

export const App: Component = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} component={MainPage} />
        <Route path={'/map'} component={MapPage} />
        <Route path={'/:country'} component={CountryPage} />
      </Routes>
    </Router>
  )
}
