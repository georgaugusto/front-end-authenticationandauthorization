import { ReactNode } from 'react';
import { StyledLink } from './styles';

interface NavLinkProps {
  children?: ReactNode;
  iconName: JSX.Element;
  compact: number;
  to: string;
  label: string;
  onClick?(): void;
}

export const NavLink = ({
  children,
  iconName,
  label,
  ...rest
}: NavLinkProps) => {
  return (
    <StyledLink {...rest}>
      {children || (
        <>
          <i>{iconName}</i>
          <span>{label}</span>
        </>
      )}
    </StyledLink>
  );
};
