import React, { useState, useReducer, createContext, useEffect } from "react"

export const AuthContext = createContext()

const initialValue = {
  user: null,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    default:
      return { state }
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const [isCancelled, setIsCancelled] = useState(false)

  //   useEffect(() => {
  //     if (state.user) {
  //       dispatch({ type: "LOGIN", payload: user })
  //       return () => setIsCancelled(true)
  //     }
  //   }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
