import { StyleLink } from './styles';

import logoImg from '../../../../assets/react.png';

export const Logo = ({ ...props }) => {
  return (
    <StyleLink
      to={{
        pathname: '/dashboard',
      }}
      {...props}
    >
      <img src={logoImg} alt="" />
      {/*<span>React</span> */}
    </StyleLink>
  );
};
