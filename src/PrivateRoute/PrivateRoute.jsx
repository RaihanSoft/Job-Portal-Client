import { useContext } from "react"
import AuthContext from "../Context/AuthContext/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <p>Loading... ...</p>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/register'} state={location?.pathname} ></Navigate>
}
export default PrivateRoute;
