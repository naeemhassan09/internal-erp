/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';import { FunctionComponent, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

type SideMenuType = {
  onClose?: () => void;
};

const animationSlideInTop = keyframes`
    0% {
        transform: translateY(-200px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
  `;

const Home = styled.div`
  position: relative;
  font-weight: 500;
`;

const HomeWrapper = styled.a`
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  cursor: pointer;
  color: inherit;
`;

const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xl);
`;

const NavLinks = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SideMenuRoot = styled.div`
  background-color: var(--color-slateblue-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xl) var(--padding-19xl);
  box-sizing: border-box;
  opacity: 0;
  width: 100%;
  max-height: 90%;
  overflow: auto;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-white);
  font-family: var(--font-inter);
  &.animate {
    animation: 0.25s ease 0s 1 normal forwards ${animationSlideInTop};
  }
`;

const CloseButton = styled.button`
  // Style your close button here
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const SideMenu: FunctionComponent<SideMenuType> = ({ onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      '[data-animate-on-scroll]'
    );
    
  

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add('animate');
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <SideMenuRoot data-animate-on-scroll>
      <CloseButton onClick={ handleClose }>Close</CloseButton>
      <NavLinks>
        <FrameParent>
          <HomeWrapper>
            <Home>Home</Home>
          </HomeWrapper>
          <HomeWrapper>
            <Home>About Us</Home>
          </HomeWrapper>
          <HomeWrapper>
            <Home>Contact Us</Home>
          </HomeWrapper>
        </FrameParent>
      </NavLinks>
    </SideMenuRoot>
  );
};

export default SideMenu;


