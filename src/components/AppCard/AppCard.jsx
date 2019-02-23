import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SubscriptionContainer,
  CardTitle,
  CardSubTitle,
  CardDescription,
  SubscriptionName,
  SubscriptionPrice
} from './AppCardStyles';

const formatPrice = value =>
  value > 0
    ? (value / 100).toLocaleString('en-US', {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      })
    : 'Free';

const AppCard = ({ name, description, categories, subscriptions }) => (
  <Card>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardSubTitle>{categories.join(' / ')}</CardSubTitle>
    </CardHeader>
    <CardBody>
      <CardDescription>{description}</CardDescription>
    </CardBody>
    <CardFooter>
      {subscriptions.map(({ name: subsName, price }, index) => (
        <SubscriptionContainer key={`subs_${index}`}>
          <SubscriptionName>{subsName}</SubscriptionName>
          <SubscriptionPrice>
            {formatPrice(price)}
            {price > 0 && <sup>&euro;</sup>}
          </SubscriptionPrice>
        </SubscriptionContainer>
      ))}
    </CardFooter>
  </Card>
);

export default AppCard;
