import { Component } from 'solid-js'
import { Routes, Route, Router } from '@solidjs/router'
import { MainPage, CountryPage } from '@/pages'

export const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} component={MainPage} />
        <Route path={'/:country'} component={CountryPage} />
      </Routes>
    </Router>
  )
}
