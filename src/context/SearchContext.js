import React, { PureComponent } from 'react';

const SearchContext = React.createContext();

class SearchProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      listApps: [],
      isLoading: false
    };

    this.toggleLoading = this.toggleLoading.bind(this);
    this.onSelectRegionalHandler = this.onSelectRegionalHandler.bind(this);
  }

  onSelectRegionalHandler(selected) {
    this.setState({ listRegionais: selected ? [...selected] : [] });
  }

  toggleLoading(isLoading = false) {
    this.setState({ isLoading });
  }

  render() {
    const { listRegionais, isLoading } = this.state;
    const { children } = this.props;

    const value = {
      listRegionais,
      isLoading,
      toggleLoading: this.toggleLoading,
      onSelectRegional: this.onSelectRegionalHandler
    };

    return (
      <SearchContext.Provider value={value}>
        { children }
      </SearchContext.Provider>
    );
  }
}

const BackOfficeConsumer = SearchContext.Consumer;

export { SearchProvider as BackOfficeProvider, BackOfficeConsumer };