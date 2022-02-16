import { useState } from 'react';

import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import { Grid, GridNav, GridHeader, GridMain, GridFooter } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children, ...rest }: LayoutProps) => {
  const [showNavMobile, setShowNav] = useState(1);
  const [compact, setCompact] = useState(1);

  const toggle = () => setShowNav(Number(!showNavMobile));

  return (
    <Grid {...rest}>
      <>
        <GridNav>
          <Navbar
            setCompact={setCompact}
            visible={showNavMobile}
            close={toggle}
          />
        </GridNav>
        <GridHeader compact={compact}>
          <Header toggle={toggle} />
        </GridHeader>
        <GridMain compact={compact}>{children}</GridMain>
        <GridFooter compact={compact}>
          <Footer />
        </GridFooter>
      </>
    </Grid>
  );
};
