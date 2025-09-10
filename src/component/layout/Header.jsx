"use client"

import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Header = () => {
  const { logout } = useContext(AuthContext)

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <div className="flex items-center space-x-3">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
