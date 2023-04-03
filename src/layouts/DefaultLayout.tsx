import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <aside>
        <Sidebar />
        <Outlet />
      </aside>
    </>
  )
}
