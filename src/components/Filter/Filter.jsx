import React from 'react';
import { FilterItemContainer } from './FilterStyles';

const FilterItem = ({ children, ...props }) => (
  <FilterItemContainer {...props}>{children}</FilterItemContainer>
);

export default FilterItem;
