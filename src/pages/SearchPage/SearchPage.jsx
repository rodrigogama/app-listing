import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import SearchBar from '../../components/SearchBar';
import { Nav, NavTitle, NavList, NavListItem } from '../../components/Nav';
import AppCard from '../../components/AppCard';
import { fetchCategories, fetchApps } from '../../services';
import { Page, ListContainer } from './SearchPageStyles';

class SearchPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      categories: [],
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
    console.log(ev.currentTarget.dataset.category);
  }

  filterList() {
    const { searchTerm } = this.state;
    console.log(searchTerm);
  }

  render() {
    const { searchTerm, categories, items } = this.state;

    return (
      <Page>
        <Nav>
          <NavTitle>Categories</NavTitle>
          <NavList>
            {categories.map(cat => (
              <NavListItem
                key={cat.id}
                onClick={this.onCategoryClickHandler}
                data-category={cat.id}
              >
                {cat.description}
              </NavListItem>
            ))}
          </NavList>
        </Nav>
        <ListContainer>
          <SearchBar value={searchTerm} onChange={this.onChangeHandler} />

          {items.map(item => (
            <AppCard {...item} />
          ))}
        </ListContainer>
      </Page>
    );
  }
}

export default SearchPage;
