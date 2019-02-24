import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 280px;
  min-height: 320px;
  border-radius: 12px;
  position: relative;
  will-change: box-shadow;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  transition-property: box-shadow;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFn};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.focused};
  }
`;

export const SkeletonCard = styled(Card)`
  padding: 16px;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0 16px;
  align-items: flex-start;
  justify-content: center;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 16px;
  text-align: center;
`;

export const CardFooter = styled.footer`
  width: 100%;
  padding: 16px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.teal};
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

export const CardTitle = styled.h1`
  margin: 0;
  line-height: 36px;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.teal};
  margin-bottom: 8px;
`;

export const CardSubTitle = styled.span`
  font-size: 12px;
  color: ${({ theme: { colors } }) => colors.teal};
`;

export const CardDescription = styled.p`
  margin: 0;
  line-height: 24px;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const SubscriptionName = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const SubscriptionPrice = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 300;

  & sup {
    font-size: 14px;
    top: -14px;
  }
`;
