import React from 'react';
import ContentLoader from 'react-content-loader';
import { SkeletonCard } from './AppCardStyles';

const AppCardSkeleton = props => (
  <SkeletonCard>
    <ContentLoader
      height={320}
      width={280}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      ariaLabel="Loading apps..."
      {...props}
    >
      <rect x="0" y="15" rx="4" ry="4" width="180" height="10" />
      <rect x="0" y="45" rx="3" ry="3" width="100" height="10" />
      <rect x="0" y="130" rx="3" ry="3" width="280" height="6.4" />
      <rect x="0" y="150" rx="3" ry="3" width="280" height="6.4" />
      <rect x="0" y="170" rx="3" ry="3" width="280" height="6.4" />
      <rect x="0" y="190" rx="3" ry="3" width="201" height="6.4" />
      <rect x="10" y="270" rx="3" ry="3" width="60" height="6.4" />
      <rect x="0" y="300" rx="3" ry="3" width="80" height="6.4" />
      <rect x="110" y="270" rx="3" ry="3" width="60" height="6.4" />
      <rect x="100" y="300" rx="3" ry="3" width="80" height="6.4" />
      <rect x="210" y="270" rx="3" ry="3" width="60" height="6.4" />
      <rect x="200" y="300" rx="3" ry="3" width="80" height="6.4" />
    </ContentLoader>
  </SkeletonCard>
);

export default AppCardSkeleton;
