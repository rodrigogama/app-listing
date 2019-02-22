import React from 'react';
import PropTypes from 'prop-types';
import { SearchBarContainer, Input, SearchIcon } from './SearchBarStyles';

const SearchBar = ({ value, onClear, ...props }) => {
  const hasValue = Boolean(value);
  return (
    <SearchBarContainer>
      <Input {...props} value={value} />
      <SearchIcon onClick={hasValue ? onClear : undefined} />
    </SearchBarContainer>
  );
};

SearchBar.defaultProps = {
  value: null,
  onClear: () => {}
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onClear: PropTypes.func
};

export default SearchBar;
