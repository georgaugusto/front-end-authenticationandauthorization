import decode from 'jwt-decode';

interface UseCanParams {
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

export function useCan({ permissions, roles }: UseCanParams) {
  const token = localStorage.getItem('reactauth.token');

  if (!token) {
    return false;
  }

  const user: UserProps = decode(token);

  if (roles) {
    if (roles.length > 0) {
      const hasAllRoles = roles.some(role => {
        return user.roles.includes(role);
      });

      if (!hasAllRoles) {
        return false;
      }
    }
  }

  if (permissions) {
    if (permissions.length > 0) {
      const hasAllPermissions = permissions.every(permission => {
        return user.permissions.includes(permission);
      });

      if (!hasAllPermissions) {
        return false;
      }
    }
  }

  return true;
}
