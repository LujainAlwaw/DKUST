


import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarHeader = styled.header`
  background-color: var(--dark-blue);
  color: var(--color-white);
  width: 100%;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: var(--font-family);
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1440px) { padding: 0 1.5rem; }
  @media (max-width: 1024px) { padding: 0 1.25rem; }
  @media (max-width: 768px) { padding: 0 1rem; }
`;

export const Logo = styled(NavLink)`
  font-family: var(--font-family);
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.5px;
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 1.3rem;
  color: var(--color-white); 
  cursor: pointer;

  @media (max-width: 1024px) { display: flex; }
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: auto;
  margin-right: 2rem;

  .mobile-only { display: none; }

  @media (max-width: 1440px) {
    gap: 0.9rem;
    margin-right: 1.5rem;
  }

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--dark-blue);
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 2rem;
    gap: 0;
    margin: 0;
    z-index: 999;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    overflow-y: auto;

    .mobile-only { display: block; }
  }
`;

export const MobileHeader = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: var(--font-family);
  color: var(--color-white); 
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: var(--fw-medium);
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover, &.active { color: var(--brand-green); }

  @media (max-width: 1440px) { font-size: 0.68rem; }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.9rem;
    text-transform: capitalize;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 1024px) { display: none; }
`;

export const NavBtn = styled.button`
  font-family: var(--font-family);
  background: transparent;
  color: var(--brand-green);
  border: 1px solid var(--brand-green);
  padding: 0.35rem 0.8rem;
  border-radius: var(--radius);
  font-size: 0.68rem;
  font-weight: var(--fw-medium);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--brand-green);
    color: var(--color-white); 
  }

  @media (max-width: 1440px) {
    padding: 0.3rem 0.65rem;
    font-size: 0.65rem;
  }
`;