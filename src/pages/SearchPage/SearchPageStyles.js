import styled from 'styled-components';

export const Page = styled.main`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  background-color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const ListContainer = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, 280px);
  margin-bottom: 24px;
`;

export const Label = styled.div``;
