import styled from 'styled-components';

export const Page = styled.main`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  padding: 32px 0;
  background-color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const ListContainer = styled.section`
  flex: 1;
  order: 2;
  text-align: left;
  padding: 16px;
`;

export const Label = styled.div``;
