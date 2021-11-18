import { useEffect, useState } from 'react'

// components
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'

// contexts
import { SelectedMovieContextProvider } from './contexts/selectedMovie'

// styles
import './styles/global.scss'
import './styles/sidebar.scss'
import './styles/content.scss'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SelectedMovieContextProvider>
        <SideBar />
        <Content />
      </SelectedMovieContextProvider>
    </div>
  )
}
