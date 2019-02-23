import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import SearchBox from '../../components/SearchBox';
import AppCard from '../../components/AppCard';
import { Filter, FilterItem } from '../../components/Filter';
import Pagination from '../../components/Pagination';
import { fetchCategories, fetchApps } from '../../services';
import { Page, ListContainer } from './SearchPageStyles';

class SearchPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      categories: [],
      selectedCategories: [],
      listApps: [],
      currentPage: 0,
      pageOfItems: []
    };

    this.filterList = this.filterList.bind(this);
    this.onClearHandler = this.onClearHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCategoryClickHandler = this.onCategoryClickHandler.bind(this);

    this.onPaginateHandler = this.onPaginateHandler.bind(this);

    this.filterList = debounce(this.filterList, 1000);
  }

  componentDidMount() {
    fetchCategories().then(({ data }) => this.setState({ categories: data }));
    fetchApps().then(({ data }) => this.setState({ listApps: data }));
  }

  onChangeHandler(ev) {
    this.setState({ searchTerm: ev.target.value });
    this.filterList();
  }

  onClearHandler() {
    this.setState({ searchTerm: '' });
  }

  onCategoryClickHandler(ev) {
    const { selectedCategories } = this.state;
    const { category } = ev.currentTarget.dataset;
    const catIndex = selectedCategories.findIndex(e => e === category);

    this.setState(prevState => ({
      selectedCategories:
        catIndex > -1
          ? selectedCategories.filter(e => e !== category)
          : [...prevState.selectedCategories, category]
    }));
  }

  onPaginateHandler(items) {
    console.log('paginate');
    console.log(items);
    this.setState({ pageOfItems: items });
  }

  filterList() {
    const { searchTerm } = this.state;
    console.log(searchTerm);
  }

  render() {
    const { searchTerm, categories, selectedCategories, listApps, pageOfItems } = this.state;

    return (
      <Page>
        <SearchBox placeholder="Search by app" value={searchTerm} onChange={this.onChangeHandler} />
        <Filter>
          {categories.map(cat => (
            <FilterItem
              key={cat.id}
              onClick={this.onCategoryClickHandler}
              data-category={cat.id}
              active={selectedCategories.includes(cat.id)}
            >
              {cat.description}
            </FilterItem>
          ))}
        </Filter>

        <ListContainer>
          {pageOfItems.map(e => (
            <AppCard key={e.id} {...e} />
          ))}
        </ListContainer>

        <Pagination onChangePage={this.onPaginateHandler} items={listApps} pageSize={3} />
      </Page>
    );
  }
}

export default SearchPage;
