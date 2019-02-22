import React from 'react';
import PropTypes from 'prop-types';
import { SearchBoxContainer, Input, SearchIcon } from './SearchBoxStyles';

const SearchBox = ({ value, onClear, ...props }) => {
  const hasValue = Boolean(value);
  return (
    <SearchBoxContainer>
      <Input {...props} value={value} />
      <SearchIcon onClick={hasValue ? onClear : undefined} />
    </SearchBoxContainer>
  );
};

SearchBox.defaultProps = {
  value: null,
  onClear: () => {}
};

SearchBox.propTypes = {
  value: PropTypes.string,
  onClear: PropTypes.func
};

export default SearchBox;
