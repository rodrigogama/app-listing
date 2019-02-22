import styled from 'styled-components';

export const FilterContainer = styled.ol`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const FilterItemContainer = styled.li`
  margin-right: 12px;
  display: inline-block;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
  line-height: 32px;
  padding: 0 12px;
  border-radius: 16px;
  user-select: none;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.colors.white : theme.colors.black)};
  background-color: ${({ theme, active }) => (active ? theme.colors.teal : theme.colors.white)};
  transition-property: all;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFn};

  &:last-child {
    margin-right: 0px;
  }
`;
