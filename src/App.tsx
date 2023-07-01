import { Component } from 'solid-js'
import { Routes, Route, Router } from '@solidjs/router'
import { Main, Country } from '@/pages'

export const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} component={Main} />
        <Route path={'/:country'} component={Country} />
      </Routes>
    </Router>
  )
}
