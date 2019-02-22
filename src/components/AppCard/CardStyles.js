import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: 172px;
  border-radius: 4px;
  padding: 24px;
  position: relative;
  margin-bottom: 24px;
  transition: box-shadow 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: box-shadow;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
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
