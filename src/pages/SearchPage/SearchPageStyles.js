import styled from 'styled-components';

export const Page = styled.main`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const ListContainer = styled.section`
  flex: 1;
  order: 2;
  text-align: left;
  padding: 16px;
`;

export const Label = styled.div``;
