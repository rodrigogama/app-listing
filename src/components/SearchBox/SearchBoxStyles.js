import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  font-size: 16px;
  font-weight: 300;
  outline: 0;
  border-radius: 12px;
  width: 100%;
  padding: 16px 60px 16px 16px;
  color: ${({ theme: { colors } }) => colors.black};
  border: 1px solid ${({ theme: { colors } }) => colors.lightGray};
  margin-bottom: 24px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  transition-property: all;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFn};

  &:focus {
    border-color: ${({ theme: { colors } }) => colors.teal};
    box-shadow: ${({ theme }) => theme.boxShadow.focused};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0;
  top: 26px;
  width: 60px;

  &::before {
    content: '';
    position: absolute;
    margin: auto;
    top: 20px;
    right: 0;
    bottom: 0;
    left: 20px;
    width: 12px;
    height: 2px;
    background: ${({ theme: { colors } }) => colors.lightGray};
    transform: rotate(45deg);
    transition-property: all;
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-timing-function: ${({ theme }) => theme.transition.timingFn};

    input:focus ~ & {
      background: ${({ theme: { colors } }) => colors.teal};
    }
  }

  &::after {
    content: '';
    position: absolute;
    margin: auto;
    top: -5px;
    right: 0;
    bottom: 0;
    left: -5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${({ theme: { colors } }) => colors.lightGray};
    transition-property: all;
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-timing-function: ${({ theme }) => theme.transition.timingFn};

    input:focus ~ & {
      border-color: ${({ theme: { colors } }) => colors.teal};
    }
  }
`;
