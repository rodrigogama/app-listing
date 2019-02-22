import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-size: 16px;
  font-weight: 300;
  background-clip: padding-box;
  outline: 0;
  -webkit-appearance: none;
  width: 100%;
  resize: none;
  padding: 16px;
  padding-right: 60px;
  border: 1px solid ${({ theme: { colors } }) => colors.lightGray};
  margin-bottom: 32px;
  transition: all 200ms ease;

  &:focus {
    border-color: ${({ theme: { colors } }) => colors.teal};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 32px;
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
    transition: all 0.5s;

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
    transition: all 0.5s;

    input:focus ~ & {
      border-color: ${({ theme: { colors } }) => colors.teal};
    }
  }
`;
