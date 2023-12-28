import React from 'react';
import styled from 'styled-components';
import theme from 'src/styles/theme'; // Ensure this path is correct

// Styled components
const FooterContainer = styled.div`
align-self: stretch;
background-color: ${theme.palette.error.main};
backdrop-filter: blur(61px);
height: 5rem;
overflow: hidden;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
padding: 0.63rem; 
box-sizing: border-box;
text-align: center;
color: ${theme.palette.common.white};
font-family: ${theme.typography.fontFamily};
`;

const FooterContent = styled.div`
  height: 1.38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-16xl);
  box-sizing: border-box;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Home = styled.div`
  // Additional styling can be added here
  align-items: left;
  font-family: ${theme.typography.fontFamily}; 
`;

// Footer component
const Footer: React.FC = () => (
  <FooterContainer>
    <FooterContent>
      <FooterLinks>
        <Home>© 2023 - Powered by Alchemative - All Rights Reserved</Home>
      </FooterLinks>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
