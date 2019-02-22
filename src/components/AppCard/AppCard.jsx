import React, { Fragment } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  DescriptionContainer,
  CardTitle,
  CardDescription,
  CardTags,
  SubscriptionName,
  SubscriptionPrice
} from './CardStyles';

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
      <DescriptionContainer>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </DescriptionContainer>
      <CardTags>{categories.join(' / ')}</CardTags>
    </CardHeader>
    <CardBody>
      {subscriptions.map(({ name: subsName, price }) => (
        <Fragment>
          <SubscriptionName>{subsName}</SubscriptionName>
          <SubscriptionPrice>{formatPrice(price)}</SubscriptionPrice>
          {price > 0 && <sup>&euro;</sup>}
        </Fragment>
      ))}
    </CardBody>
  </Card>
);

export default AppCard;
