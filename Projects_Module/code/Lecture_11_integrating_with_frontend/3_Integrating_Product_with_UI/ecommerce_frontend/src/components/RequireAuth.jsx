import { useLocation, Navigate, 
    Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { user } = useAuth();
    const location = useLocation();
console.log(user);
    return (
        user ? <Outlet />: 
        <Navigate to="/signin" 
        state={{ from: location }} replace />
    );
}

export default RequireAuth;