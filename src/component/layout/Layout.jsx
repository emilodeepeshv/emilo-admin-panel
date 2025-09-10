import MobileFooter from "./MobileFooter"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 min-h-screen lg:ml-64">
        <div className="p-6">
          {/* Children pages will render here */}
          <Outlet />
        </div>
          <MobileFooter />
      </div>
    </div>
  )
}

export default Layout
