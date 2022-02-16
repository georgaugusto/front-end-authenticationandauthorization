/*eslint-disable react/destructuring-assignment */
import { useState, useEffect } from 'react';
import { HiOutlineCog, HiOutlineLogout } from 'react-icons/hi';

import { Container, StyledNav, Backdrop } from './styles';

import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { NavLinksGroup } from './NavLinksGroup';
import { NavToggle } from './NavToggle';

export const Navbar = ({ ...props }) => {
  const [compact, setCompact] = useState(1);

  useEffect(() => {
    props.setCompact(compact);
  }, [props, compact]);

  return (
    <Container>
      <Backdrop visible={props.visible} onClick={props.close} />
      <StyledNav compact={compact} onClick={props.close} {...props}>
        <Logo compact={compact} />
        <NavLinksGroup compact={compact} />
        <NavLink
          compact={compact}
          to="/settings"
          iconName={<HiOutlineCog />}
          label="Settings"
        />
        <NavLink
          compact={compact}
          to="/"
          iconName={<HiOutlineLogout />}
          label="Logout"
          onClick={() => window.localStorage.clear()}
        />
      </StyledNav>
      <NavToggle compact={compact} setCompact={setCompact} />
    </Container>
  );
};
