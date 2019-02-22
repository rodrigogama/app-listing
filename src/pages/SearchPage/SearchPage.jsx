import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import SearchBar from '../../components/SearchBar';
import { Nav, NavTitle, NavList, NavListItem } from '../../components/Nav';
import { fetchCategories } from '../../services';
import { Page } from './SearchPageStyles';

class SearchPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      categories: []
    };

    this.filterList = this.filterList.bind(this);
    this.onClearHandler = this.onClearHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCategoryClickHandler = this.onCategoryClickHandler.bind(this);

    this.filterList = debounce(this.filterList, 1000);
  }

  componentDidMount() {
    fetchCategories().then(({ data }) => this.setState({ categories: data }));
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
    const { searchTerm, categories } = this.state;

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
        <SearchBar value={searchTerm} onChange={this.onChangeHandler} />
      </Page>
    );
  }
}

export default SearchPage;
