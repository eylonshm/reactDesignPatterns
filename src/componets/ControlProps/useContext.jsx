import { createContext, useContext as useReactContext } from 'react'

const Context = createContext()

const ContextProvider = ({ children, value }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>
}

function useContext() {
  const context = useReactContext(Context)
  if (context === undefined) {
    throw new Error('useContext must be used within a CounterProvider')
  }
  return context
}

export { useContext, ContextProvider }
