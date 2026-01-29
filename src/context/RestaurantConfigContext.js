// context/RestaurantConfigContext.js
'use client'

import { createContext, useContext } from 'react'

const RestaurantConfigContext = createContext(null)

export function RestaurantConfigProvider({ config, children }) {
  return (
    <RestaurantConfigContext.Provider value={config}>
      {children}
    </RestaurantConfigContext.Provider>
  )
}

export function useRestaurantConfig() {
  const config = useContext(RestaurantConfigContext)
  if (!config) {
    throw new Error('useRestaurantConfig must be used inside provider')
  }
  return config
}
