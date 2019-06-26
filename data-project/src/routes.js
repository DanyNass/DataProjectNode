import React from 'react'
import AppLandingPage from './components/AppLandingPage'
import AppEsperimento from './components/AppEsperimento'


export default [
  {
    path: '/',
    exact: true,
    getComponent: () => <AppLandingPage />
  },
  {
    path: '/esperimento',
    exact: false,
    getComponent: () => <AppEsperimento />
  }
]