import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import SearchBox from '../../components/SearchBox';
import AppCard from '../../components/AppCard';
import { Filter, FilterItem } from '../../components/Filter';
import { fetchCategories, fetchApps } from '../../services';
import { Page, ListContainer } from './SearchPageStyles';

class SearchPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      categories: [],
      selectedCategories: [],
      items: []
    };

    this.filterList = this.filterList.bind(this);
    this.onClearHandler = this.onClearHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCategoryClickHandler = this.onCategoryClickHandler.bind(this);

    this.filterList = debounce(this.filterList, 1000);
  }

  componentDidMount() {
    fetchCategories().then(({ data }) => this.setState({ categories: data }));
    fetchApps().then(({ data }) => this.setState({ items: data }));
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

  filterList() {
    const { searchTerm } = this.state;
    console.log(searchTerm);
  }

  render() {
    const { searchTerm, categories, selectedCategories, items } = this.state;

    return (
      <Page>
        <SearchBox value={searchTerm} onChange={this.onChangeHandler} />
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
          {items.map(e => <AppCard key={e.id} {...e} />)}
        </ListContainer>
      </Page>
    );
  }
}

export default SearchPage;
