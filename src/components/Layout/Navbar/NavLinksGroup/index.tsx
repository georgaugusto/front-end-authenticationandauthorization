import { HiOutlineHome, HiOutlineUserGroup } from 'react-icons/hi';
import { Can } from '../../../Can';

import { LinksGroup, DenseNavLinks } from './styles';

const links = [
  {
    to: '/dashboard',
    icon: <HiOutlineHome />,
    label: 'Dashboard',
    permissions: [],
    roles: [],
  },
  {
    to: '/listuser',
    icon: <HiOutlineUserGroup />,
    label: 'List Users',
    permissions: ['users.list'],
    roles: ['administrator', 'user'],
  },
  {
    to: '/createuser',
    icon: <HiOutlineUserGroup />,
    label: 'Create Users',
    permissions: ['users.create'],
    roles: ['administrator'],
  },
];

interface INavLinksGroup {
  compact: number;
}

export const NavLinksGroup = ({ compact, ...props }: INavLinksGroup) => {
  return (
    <LinksGroup {...props}>
      {links.map(l => {
        return (
          <Can key={l.to} permissions={l.permissions} roles={l.roles}>
            <DenseNavLinks
              compact={compact}
              key={l.to}
              to={l.to}
              iconName={l.icon}
              label={l.label}
            />
          </Can>
        );
      })}
    </LinksGroup>
  );
};
