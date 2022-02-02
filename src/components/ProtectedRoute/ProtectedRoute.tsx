import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const isLogged = localStorage.getItem('refreshToken');
    const isUser = localStorage.getItem('isAdmin') == 'user';

    return isLogged && isUser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
