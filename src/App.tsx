import { Component } from 'solid-js'
import { Routes, Route, Router } from '@solidjs/router'
import { Main } from '@/pages'

export const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} component={Main} />
      </Routes>
    </Router>
  )
}
