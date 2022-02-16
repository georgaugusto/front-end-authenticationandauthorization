import { Navigate, Outlet, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

interface AuthRouteProps {
  permissions?: string[];
  roles?: string[];
}

interface UserProps {
  exp: number;
  iat: number;
  permissions: string[];
  roles: string[];
  sub: string;
}

function AuthRoute({ permissions, roles }: AuthRouteProps) {
  const location = useLocation();
  const token = localStorage.getItem('reactauth.token');

  const userCanAccess = () => {
    if (!token) {
      return false;
    }

    const user: UserProps = decode(token);

    if (roles) {
      if (roles.length > 0) {
        const hasAllRoles = roles?.some(role => {
          return user?.roles.includes(role);
        });

        if (!hasAllRoles) {
          return false;
        }
      }
    }

    if (permissions) {
      if (permissions?.length > 0) {
        const hasAllPermissions = permissions?.every(permission => {
          return user?.permissions.includes(permission);
        });

        if (!hasAllPermissions) {
          return false;
        }
      }
    }

    return true;
  };

  return userCanAccess() ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default AuthRoute;
