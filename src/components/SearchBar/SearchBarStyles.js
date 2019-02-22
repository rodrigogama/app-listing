import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-size: 16px;
  font-weight: 300;
  background-clip: padding-box;
  transition: all 200ms ease;
  outline: 0;
  -webkit-appearance: none;
  width: 100%;
  resize: none;
  padding: 1rem;
  border: 1px solid ${({ theme: { colors } }) => colors.gray};
  margin-bottom: 2rem;
`;

export const SearchIcon = styled.div`

`;
