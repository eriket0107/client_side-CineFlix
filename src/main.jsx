import React from 'react'
import theme  from './styles/theme'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'
import { SearchProvider } from './hooks/search'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
            <AuthProvider>
              <SearchProvider>
                < Routes/>
              </SearchProvider>
            </AuthProvider>
      </ThemeProvider>
  </React.StrictMode>,
)
