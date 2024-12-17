import { useContext } from "react"
import AuthContext from "../../Context/AuthContext/AuthContext"

const SocialLogin = () => {
    const { handleGoogle } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        handleGoogle()

    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-primary" >Google</button>
        </div>
    )
}

export default SocialLogin
