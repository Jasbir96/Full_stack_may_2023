import {
    useLocation, Navigate,
    Outlet
} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { user } = useAuth();
    const location = useLocation();
    const isUserPresent = Object.keys(user).length > 0;
    return (
        isUserPresent ? <Outlet /> :
            <Navigate to="/signin"
                state={{ from: location }} replace />
    );
}

export default RequireAuth;