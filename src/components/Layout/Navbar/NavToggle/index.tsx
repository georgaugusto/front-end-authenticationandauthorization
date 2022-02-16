import { TiArrowSortedDown } from 'react-icons/ti';

import { Button } from './styles';

interface INavToggleProps {
  setCompact: React.Dispatch<React.SetStateAction<number>>;
  compact: number;
}

export const NavToggle = ({
  compact,
  setCompact,
  ...props
}: INavToggleProps) => {
  return (
    <Button
      compact={compact}
      className="nav-toggle"
      onClick={() => setCompact(Number(!compact))}
      {...props}
    >
      <TiArrowSortedDown />
    </Button>
  );
};
