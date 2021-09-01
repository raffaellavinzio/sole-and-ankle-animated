import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLinkWrapper>
            <NavLink href='/sale'>Sale</NavLink>
            <NavLinkBold href='/sale'>Sale</NavLinkBold>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href='/new'>New&nbsp;Releases</NavLink>
            <NavLinkBold href='/new'>New&nbsp;Releases</NavLinkBold>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href='/men'>Men</NavLink>
            <NavLinkBold href='/men'>Men</NavLinkBold>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href='/women'>Women</NavLink>
            <NavLinkBold href='/women'>Women</NavLinkBold>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href='/kids'>Kids</NavLink>
            <NavLinkBold href='/kids'>Kids</NavLinkBold>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href='/collections'>Collections</NavLink>
            <NavLinkBold href='/collections'>Collections</NavLinkBold>
          </NavLinkWrapper>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id='shopping-bag' />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id='search' />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLinkWrapper = styled.div`
  position: relative;
  color: var(--color-gray-900);
  perspective: 100px;
  &:first-of-type {
    color: var(--color-secondary);
  }

  &:hover a:first-of-type,
  &:focus a:first-of-type {
    opacity: 0;
    transform: translateY(-15px);
  }

  &:hover a:nth-of-type(2),
  &:focus a:nth-of-type(2) {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const NavLink = styled.a`
  display: inline-block;
  color: inherit;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  transform: translateY(0px);
  will-change: transform;
  z-index: 2;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 150ms 150ms ease-out, opacity 150ms 150ms ease-out;
  }

`;

const NavLinkBold = styled(NavLink)`
  font-weight: ${WEIGHTS.bold};
  position: relative;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(15px);
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 300ms ease-in, opacity 300ms ease-in;
  }
`;

export default Header;
