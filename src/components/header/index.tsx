import React, { useCallback, useState } from 'react';
import logo from 'src/assets/images/logo@2x.png'; 
import PortalDrawer from '../portal-drawer';
import SideMenu from '../side-menu';
import { HeaderContainer, FrameParent, CaptureRemovebgPreview1Wrapper, Actions, 
    NavLinksWrapper, NavLinks, Home, AboutUs, Menu } from './styled'; 




export const Header: React.FC = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const openSideMenu = useCallback(() => {
    setSideMenuOpen(true);
  }, []);

  const closeSideMenu = useCallback(() => {
    setSideMenuOpen(false);
  }, []);

  return (
    <>
      <HeaderContainer>
        <FrameParent>
          <CaptureRemovebgPreview1Wrapper>
            <img src={ logo } alt='Logo' />
          </CaptureRemovebgPreview1Wrapper>
          <Actions>
            <NavLinksWrapper>
              <NavLinks>
                <Home>Home</Home>
                <AboutUs>About Us</AboutUs>
                <AboutUs>Contact Us</AboutUs>
              </NavLinks>
            </NavLinksWrapper>
            <Menu onClick={ openSideMenu } />
          </Actions>
        </FrameParent>
      </HeaderContainer>

      { isSideMenuOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Top'
          onOutsideClick={ closeSideMenu }
        >
          <SideMenu onClose={ closeSideMenu } />
        </PortalDrawer>
      ) }
    </>
  );
};

export default Header;
