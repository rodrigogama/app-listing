import React, { Fragment } from 'react';
import { SearchConsumer } from '../../context/SearchContext';
import SearchBox from '../../components/SearchBox';
import AppCard, { AppCardSkeleton } from '../../components/AppCard';
import { Filter, FilterItem } from '../../components/Filter';
import Pagination from '../../components/Pagination';
import { Page, ListContainer } from './SearchPageStyles';

const SearchPage = () => (
  <Page>
    <SearchConsumer>
      {({
        isLoading,
        searchTerm,
        listCategories,
        selectedCategories,
        listApps,
        listAppsPaginated,
        onCategoryFilter,
        onChangeSearch,
        onPaginate
      }) => (
        <Fragment>
          <SearchBox placeholder="Search by app" value={searchTerm} onChange={onChangeSearch} />

          <Filter>
            {listCategories.map(cat => (
              <FilterItem
                key={cat.id}
                onClick={onCategoryFilter}
                data-category={cat.description}
                active={selectedCategories.includes(cat.description)}
              >
                {cat.description}
              </FilterItem>
            ))}
          </Filter>

          <ListContainer>
            {isLoading
              ? [1, 2, 3].map(e => <AppCardSkeleton key={e} />)
              : listAppsPaginated.map(e => <AppCard key={e.id} {...e} />)}
          </ListContainer>

          <Pagination onChangePage={onPaginate} items={listApps} pageSize={3} />
        </Fragment>
      )}
    </SearchConsumer>
  </Page>
);

export default SearchPage;
