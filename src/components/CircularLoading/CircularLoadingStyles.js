import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  position: relative;
  width: ${({ width }) => `${width}px`};
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Svg = styled.svg`
  animation: rotate 1.4s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  stroke: ${({ theme }) => theme.colors.white};
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Circle = styled.circle`
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: square;
  fill: none;
  stroke-miterlimit: 10;
  stroke-width: 3.6;
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -120px;
    }
  }
`;
