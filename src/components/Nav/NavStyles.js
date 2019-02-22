import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 16px 0;
`;

export const NavTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.black};
  margin: 0;
  font-size: 34px;
  padding: 0 16px;
`;

export const NavList = styled.ol`
  list-style-type: none;
  text-align: left;
  padding: 0;
`;

export const NavListItem = styled.li`
  cursor: pointer;
  padding: 16px;
  font-size: 17px;
  color: ${({ active, theme: { colors } }) => (active ? colors.teal : colors.black)};
  transition: all 300ms ease;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.teal};
  }
`;
