import { useContext } from 'react';
import { HiOutlineBell, HiOutlineMenu } from 'react-icons/hi';

import logoImg from '../../../assets/react.png';
import pandaImg from '../../../assets/user.svg';
import { AuthContext } from '../../../contexts/AuthContext';

import { Grid, Menu, PageTitle, StyledLink, Options } from './styles';

interface IHeader {
  toggle: () => void;
}

export const Header = ({ toggle }: IHeader) => {
  const { user } = useContext(AuthContext);

  return (
    <Grid>
      <PageTitle>React</PageTitle>

      <Options>
        <StyledLink to="/notifications">
          <HiOutlineBell />
        </StyledLink>
        <StyledLink to="/profile">
          <img src={pandaImg} alt="" />
        </StyledLink>
        <p>{user?.email.substring(0, user?.email.lastIndexOf('@'))}</p>

        <Menu
          className="nav-toggle"
          onClick={toggle}
          onKeyDown={toggle}
          role="button"
          tabIndex={0}
        >
          <HiOutlineMenu />
        </Menu>
      </Options>
      <img src={logoImg} alt="" />
    </Grid>
  );
};
