import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import { fetchApps, fetchCategories } from '../services';

const SearchContext = React.createContext();

class SearchProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      searchTerm: '',
      listApps: [],
      listAppsPaginated: [],
      listCategories: [],
      selectedCategories: []
    };

    this.filter = this.filter.bind(this);
    this.filterOnType = this.filterOnType.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onPaginateHandler = this.onPaginateHandler.bind(this);
    this.onCategoryFilterHandler = this.onCategoryFilterHandler.bind(this);

    this.filterOnType = debounce(this.filterOnType, 200);
  }

  componentDidMount() {
    this.loadData();
  }

  onCategoryFilterHandler(ev) {
    const { selectedCategories } = this.state;
    const { category } = ev.currentTarget.dataset;
    const catIndex = selectedCategories.findIndex(e => e === category);
    const newSelectedCategories =
      catIndex > -1
        ? selectedCategories.filter(e => e !== category)
        : [...selectedCategories, category];

    this.setState(
      {
        selectedCategories: newSelectedCategories
      },
      () => this.filter()
    );
  }

  onPaginateHandler(items) {
    this.setState({ listAppsPaginated: items });
  }

  onChangeHandler(ev) {
    this.setState({ searchTerm: ev.target.value });
    this.filterOnType();
  }

  filterOnType() {
    this.filter();
  }

  async filter() {
    await this.setState({ isLoading: true });

    const { searchTerm, selectedCategories } = this.state;
    const { data } = await fetchApps({ searchTerm, categories: selectedCategories });

    this.setState({
      listApps: data,
      isLoading: false
    });
  }

  loadData() {
    const promises = [fetchCategories(), fetchApps()];

    Promise.all(promises).then(responses => {
      const [categoryResponse, appsResponse] = responses;
      this.setState({
        listCategories: categoryResponse.data,
        listApps: appsResponse.data,
        isLoading: false
      });
    });
  }

  render() {
    const {
      isLoading,
      searchTerm,
      listApps,
      listAppsPaginated,
      listCategories,
      selectedCategories
    } = this.state;
    const { children } = this.props;

    const value = {
      isLoading,
      searchTerm,
      listApps,
      listAppsPaginated,
      listCategories,
      selectedCategories,
      onChangeSearch: this.onChangeHandler,
      onCategoryFilter: this.onCategoryFilterHandler,
      onPaginate: this.onPaginateHandler
    };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
  }
}

const SearchConsumer = SearchContext.Consumer;

export { SearchProvider, SearchConsumer };
