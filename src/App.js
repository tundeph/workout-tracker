import React, { useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import ExercisesList from "./pages/ExercisesList/ExercisesList"
import CreateExercise from "./pages/CreateExercise/CreateExercise"
import Login from "./pages/Login/Login"
import { AuthContext } from "../src/context/AuthContext"
import Navbar from "./components/MyNavBar/MyNavBar"

//styles
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  const queryClient = new QueryClient()
  const { user } = useContext(AuthContext)

  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {user && <Navbar />}
          <Routes>
            <Route
              path="/"
              element={!user ? <Login /> : <Navigate to="/list" />}
            />
            <Route
              path="/list"
              element={user ? ExercisesList : <Navigate to="/" />}
            />
            <Route path="/create" element={CreateExercise} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
