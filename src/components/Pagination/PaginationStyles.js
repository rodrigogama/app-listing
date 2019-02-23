import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationNumbersContainer = styled.ul`
  margin: 0 12px;
  padding: 0 12px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-radius: 12px;
`;

export const PaginationNumberItem = styled.li`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  transition-property: all;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFn};

  ${({ active, theme }) => active && `color: ${theme.colors.teal}`}

  &:hover {
    color: ${({ active, theme }) => theme.colors.teal};
  }
`;

export const PaginationArrowButton = styled.button`
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 12px;
  cursor: pointer;
  transition-property: all;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFn};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ active, theme }) => theme.colors.teal};
  }
`;
