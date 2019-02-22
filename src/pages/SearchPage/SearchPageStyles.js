import styled from 'styled-components';

export const Page = styled.main`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const Label = styled.div``;
