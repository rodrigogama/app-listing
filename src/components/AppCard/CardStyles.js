import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  min-height: 172px;
  border-radius: 4px;
  padding: 24px;
  position: relative;
  margin-bottom: 24px;
  will-change: box-shadow;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  transition-property: box-shadow;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFn};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.focused};
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const DescriptionContainer = styled.div``;

export const CardTitle = styled.h1`
  margin: 0;
  line-height: 36px;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.teal};
`;

export const CardDescription = styled.p`
  margin: 0;
  line-height: 24px;
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

export const CardTags = styled.span`
  color: ${({ theme: { colors } }) => colors.teal};
`;

export const SubscriptionName = styled.span`
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

export const SubscriptionPrice = styled.h3`
  margin: 0;
  padding: 0 8px;
  font-size: 24px;
  font-weight: 300;
`;
