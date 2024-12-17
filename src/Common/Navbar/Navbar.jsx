import { useContext } from "react"
import { NavLink } from "react-router-dom"
import AuthContext from "../../Context/AuthContext/AuthContext"
import { toast } from "react-toastify"

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext)
  const links =
    <>
      <li><NavLink>Home</NavLink></li>
      <li><NavLink>Submenu 1</NavLink></li>
      <li><NavLink>Submenu 2</NavLink></li>
      <li><NavLink>Item 3</NavLink></li>
    </>

  const handleSignOut = () => {
    SignOut()
    .then(result=>{
      toast.success("signOut Successfully")
    })
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ?
            <>
              <button onClick={handleSignOut} className="btn ml-10 ">LogOut</button>
            </> :
            <>
              <NavLink to={'/signIn'} className="btn ml-10 ">Register</NavLink>
              <NavLink to={'/register'} className="btn">Sign in</NavLink>
            </>
        }

      </div>
    </div>
  )
}

export default Navbar
